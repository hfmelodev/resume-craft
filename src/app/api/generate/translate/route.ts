import { APIError } from 'openai'
import { z } from 'zod'
import { decrementUserCredits, getUserCredits } from '@/db/dals'
import { openai } from '@/lib/openai'
import { isValidJSON } from '@/lib/utils'

const translateSchema = z.object({
  content: z.looseObject({}),
  language: z.enum(['english', 'spanish', 'french', 'german', 'italian', 'portuguese']),
})

export const POST = async (request: Request) => {
  try {
    const credits = await getUserCredits()

    if (credits <= 0) {
      return Response.json(
        {
          message: 'Você não possui créditos suficientes para gerar conteúdo.',
        },
        {
          status: 403,
        }
      )
    }

    const body = await request.json()

    const { content, language } = translateSchema.parse(body)

    const completion = await openai.chat.completions.create({
      model: 'gpt-4.1-mini',
      response_format: { type: 'json_object' },
      messages: [
        {
          role: 'user',
          content: `
    Baseado no JSON abaixo, traduza todos os valores dos campos para a linguagem ${language}, não importa qual linguagem o valor está escrito originalmente. Também aprimore o texto para parecer mais claro e profissional, pois será usado em currículos.
    Também corrija erros gramaticais e de concordância, se necessário.
    Mantenha dados específicos pessoais, links, emails, telefones, etc. como estão, apenas altere o texto dos campos.

    **Lembre-se de retornar um JSON válido e bem formatado.**

    **Não traduza o nome dos campos (as keys do objeto) original, mantenha isso de forma original e traduza o conteúdo dos campos.**

    **JSON:**

    ${JSON.stringify(content, null, 2)}
  `,
        },
      ],
    })

    const json = completion.choices[0].message.content

    if (!isValidJSON(json)) {
      return Response.json(
        {
          message: 'Ocorreu um erro inesperado ao gerar conteúdo.',
        },
        {
          status: 500,
        }
      )
    }

    // Requisições concorrentes podem passar juntas pela checagem inicial; o decremento atômico decide quem leva
    const debit = await decrementUserCredits(1)

    if ('error' in debit) return Response.json({ message: debit.error }, { status: 403 })

    return Response.json({
      data: json,
    })
  } catch (error) {
    console.log(error)

    if (error instanceof APIError && error.status) {
      const message =
        error.status === 429
          ? 'Limite de uso ou créditos da OpenAI esgotados.'
          : error.status === 401
            ? 'Chave da OpenAI inválida.'
            : 'Ocorreu um erro inesperado ao gerar conteúdo.'

      return Response.json({ message }, { status: error.status })
    }

    return Response.json(
      {
        message: 'Ocorreu um erro inesperado ao gerar conteúdo.',
      },
      {
        status: 500,
      }
    )
  }
}
