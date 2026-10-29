import chromium from '@sparticuz/chromium'
import puppeteer, { type Browser } from 'puppeteer-core'
import { formatTailwindHTML } from '@/lib/utils'

// Na Vercel usa o Chromium enxuto do @sparticuz/chromium; localmente usa o Chrome baixado pelo puppeteer (devDependency)
const launchBrowser = async () => {
  if (process.env.VERCEL) {
    return puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: true,
    })
  }

  const { default: localPuppeteer } = await import('puppeteer')

  return localPuppeteer.launch({ headless: true }) as Promise<Browser>
}

export const POST = async (request: Request) => {
  let browser: Browser | undefined

  try {
    const body = await request.json()

    const { html, structure } = body

    if (!html || !structure) return Response.json({ message: 'HTML do currículo obrigatório.' }, { status: 400 })

    browser = await launchBrowser()

    const page = await browser.newPage()

    await page.setContent(formatTailwindHTML(html, structure), { waitUntil: 'load' })

    // Aguarda o Tailwind (CDN) gerar os estilos antes de imprimir
    await page.waitForFunction(
      () =>
        Array.from(document.querySelectorAll('style:not([type="text/tailwindcss"])')).some(style =>
          style.textContent?.includes('tailwindcss')
        ),
      { timeout: 10_000 }
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
