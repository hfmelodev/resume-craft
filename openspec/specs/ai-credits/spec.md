# ai-credits Specification

## Purpose
Saldo de créditos de IA do usuário e compra de pacotes via Stripe Checkout, creditados por webhook.

## Requirements
### Requirement: Saldo de créditos
O sistema MUST expor o saldo do usuário em `GET /api/credits` e MUST desabilitar as ações de IA quando o saldo for 0.

#### Scenario: Saldo zerado
- **WHEN** o usuário abre o menu de IA com 0 créditos
- **THEN** as ações de geração aparecem desabilitadas, com tooltip explicando a falta de créditos, e é possível comprar créditos

### Requirement: Débito por geração
As rotas `POST /api/generate/*` MUST responder 403 sem chamar a OpenAI quando o saldo for 0 e MUST debitar 1 crédito por geração bem-sucedida com decremento atômico condicionado a `credits >= amount`, de modo que o saldo nunca fique negativo. O cliente MUST exibir a mensagem retornada pela rota e recarregar o saldo após a geração.

#### Scenario: Geração com saldo
- **WHEN** um usuário com créditos gera conteúdo com sucesso
- **THEN** o conteúdo é aplicado, 1 crédito é debitado e o saldo exibido é atualizado

#### Scenario: Sem créditos
- **WHEN** um usuário com 0 créditos chama uma rota de geração
- **THEN** a rota responde 403 com "Você não possui créditos suficientes para gerar conteúdo." e o cliente mostra essa mensagem em toast

#### Scenario: Requisições concorrentes
- **WHEN** duas gerações simultâneas passam pela checagem inicial com apenas 1 crédito
- **THEN** só uma é debitada e a outra responde 403

### Requirement: Pacotes de créditos
O sistema MUST listar os preços ativos do produto `STRIPE_CREDIT_PRODUCT_ID`, usando `price.metadata.amount` como quantidade de créditos, e MUST ignorar preços sem `amount` válido.

#### Scenario: Listar pacotes
- **WHEN** o usuário abre o diálogo de compra
- **THEN** vê os pacotes ordenados pela quantidade de créditos

### Requirement: Checkout
O sistema MUST criar uma Checkout Session em modo `payment` para o customer Stripe do usuário (criando o customer na primeira compra) e redirecionar para a URL do Stripe.

#### Scenario: Primeira compra
- **WHEN** um usuário sem `customerId` compra um pacote
- **THEN** um customer Stripe é criado, salvo em `user.customerId`, e o usuário é levado ao checkout

### Requirement: Webhook com assinatura verificada
`POST /api/webhooks/stripe` MUST verificar o header `stripe-signature` com `STRIPE_WEBHOOK_SECRET` sobre o corpo cru e MUST responder 400 quando a assinatura faltar ou for inválida.

#### Scenario: Assinatura inválida
- **WHEN** uma requisição chega sem assinatura válida
- **THEN** a rota responde 400 e nenhum crédito é alterado

### Requirement: Crédito da compra
O webhook MUST creditar `metadata.amount × quantity` dos itens no usuário do `customer` em `checkout.session.completed` e `checkout.session.async_payment_succeeded`, ignorando sessões `unpaid`.

#### Scenario: Pagamento com cartão
- **WHEN** chega `checkout.session.completed` com `payment_status` pago
- **THEN** os créditos do pacote são somados ao saldo do usuário

#### Scenario: Pagamento assíncrono
- **WHEN** chega `checkout.session.completed` com `unpaid` e depois `checkout.session.async_payment_succeeded`
- **THEN** os créditos são somados somente no segundo evento

### Requirement: Idempotência
O webhook MUST creditar cada Checkout Session no máximo uma vez, registrando `session.id` em `processedCheckoutSession` na mesma transação do crédito.

#### Scenario: Evento reenviado
- **WHEN** o Stripe reenvia um evento de uma sessão já creditada
- **THEN** o saldo não muda e a rota responde 200

### Requirement: Retorno do checkout
Ao voltar do Stripe, o sistema MUST exibir toast de sucesso com confete (`?checkout=success`) ou de cancelamento (`?checkout=cancel`), atualizar o saldo e limpar o parâmetro da URL.

#### Scenario: Compra concluída
- **WHEN** o usuário volta com `?checkout=success`
- **THEN** vê o toast "Pagamento confirmado!", o saldo é recarregado e o parâmetro some da URL

### Requirement: Página da conta
O sistema MUST exibir em `/dashboard/account` o saldo de créditos, com skeleton durante o carregamento, e ações para comprar créditos e abrir as transações. Os botões MUST ficar desabilitados e manter o loading até o navegador concluir o redirect ao Stripe.

#### Scenario: Comprar créditos pela conta
- **WHEN** o usuário clica em "Adicionar Créditos"
- **THEN** abre o diálogo de pacotes, que mostra skeletons enquanto os pacotes carregam

### Requirement: Histórico de transações
`POST /api/credits/transactions` MUST exigir sessão (401 sem ela), MUST responder 400 com "Você ainda não possui transações" quando o usuário não tiver `customerId`, e MUST retornar a URL de uma sessão do Stripe Billing Portal com retorno para a página atual.

#### Scenario: Usuário com compras
- **WHEN** um usuário com `customerId` clica em "Minhas Transações"
- **THEN** é redirecionado ao Stripe Billing Portal

#### Scenario: Usuário sem compras
- **WHEN** um usuário sem `customerId` clica em "Minhas Transações"
- **THEN** a rota responde 400 e o cliente mostra o toast informativo "Você ainda não possui transações."
