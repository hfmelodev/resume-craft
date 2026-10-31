export { cn } from 'cn'

export function sectionIsEmpty(section: ResumeSections, data: ResumeContentData) {
  switch (section) {
    case 'summary':
      return data.summary === '' || data.summary === '<p></p>'
    default:
      return data[section].length === 0
  }
}

const resumeLocales: Record<ResumeLanguages, string> = {
  english: 'en',
  spanish: 'es',
  french: 'fr',
  german: 'de',
  italian: 'it',
  portuguese: 'pt-BR',
}

export const formatTailwindHTML = (html: string, structure?: ResumeStructureData) => {
  const lang = structure ? resumeLocales[structure.language] : 'pt-BR'

  return `
    <html lang="${lang}">
    <head>
      <meta charset="utf-8" />
      <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4.3.3"></script>
      <style type="text/tailwindcss">
        @theme inline {
          --font-arial: Arial, Helvetica, sans-serif;
          --color-resume-primary: var(--resume-primary);
        }
      </style>
    </head>
      <body>
        ${html}
      </body>
    </html>
  `
}

export function isValidJSON(json: string | null) {
  try {
    if (!json) return false
    JSON.parse(json)
    return true
  } catch (_error) {
    return false
  }
}
