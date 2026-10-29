export { cn } from 'cn'

export function sectionIsEmpty(section: ResumeSections, data: ResumeContentData) {
  switch (section) {
    case 'summary':
      return data.summary === '' || data.summary === '<p></p>'
    default:
      return data[section].length === 0
  }
}

export const formatTailwindHTML = (html: string) => {
  return `
    <html>
    <head>
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
