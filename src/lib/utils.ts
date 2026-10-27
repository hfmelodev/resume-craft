export { cn } from 'cn'

export function sectionIsEmpty(section: ResumeSections, data: ResumeContentData) {
  switch (section) {
    case 'summary':
      return data.summary === '' || data.summary === '<p></p>'
    default:
      return data[section].length === 0
  }
}
