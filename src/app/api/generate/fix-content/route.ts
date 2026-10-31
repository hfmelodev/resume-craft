import { APIError } from 'openai'
import { z } from 'zod'
import { openai } from '@/lib/openai'
import { isValidJSON } from '@/lib/utils'

const fixContentSchema = z.object({
  content: z.looseObject({}),
})

export const POST = async (request: Request) => {
  try {
    const body = await request.json()

    const { content } = fixContentSchema.parse(body)

    const completion = await openai.chat.completions.create({
      model: 'gpt-4.1-mini',
      response_format: { type: 'json_object' },
      messages: [
        {
          role: 'user',
          content: `
    Baseado no JSON abaixo, avalie todos os campos alterando o conteúdo de todos eles, aprimorando o texto para parecer mais claro e profissional, pois será usado em currículos.
    Também corrija erros gramaticais e de concordância, se necessário.
    Mantenha dados pessoais, links, emails, etc. como estão, apenas altere o texto dos campos.

    **Lembre-se de retornar um JSON válido e bem formatado.**

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
