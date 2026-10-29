import puppeteer, { type Browser } from 'puppeteer'
import { formatTailwindHTML } from '@/lib/utils'

export const POST = async (request: Request) => {
  let browser: Browser | undefined

  try {
    const body = await request.json()

    const { html } = body

    if (!html) return Response.json({ message: 'HTML do currículo obrigatório.' }, { status: 400 })

    browser = await puppeteer.launch({ headless: true })

    const page = await browser.newPage()

    await page.setContent(formatTailwindHTML(html), { waitUntil: 'load' })

    // Aguarda o Tailwind (CDN) gerar os estilos antes de imprimir
    await page.waitForFunction(() =>
      Array.from(document.querySelectorAll('style:not([type="text/tailwindcss"])')).some(style =>
        style.textContent?.includes('--resume-primary')
      )
    )

    const pdf = await page.pdf({ format: 'A4', printBackground: true })

    return new Response(new Uint8Array(pdf), {
      headers: {
        'Content-Type': 'application/pdf',
      },
    })
  } catch (error) {
    console.log(error)
    return Response.json(
      {
        message: 'Ocorreu um erro inesperado ao gerar o PDF',
      },
      {
        status: 500,
      }
    )
  } finally {
    // Fecha o navegador mesmo em caso de erro para não deixar processos do Chromium abertos
    await browser?.close()
  }
}
