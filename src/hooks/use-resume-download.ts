import { useFormContext } from 'react-hook-form'
import { API } from '@/lib/axios'

export const useResumeDownload = () => {
  const { getValues } = useFormContext<ResumeData>()
  const handleDownloadResume = async () => {
    const resume = document.getElementById('resume-content')

    if (!resume) return

    const structure = getValues('structure')
    const title = getValues('content.infos.fullName')

    const { data } = await API.post(
      '/resume/download',
      {
        html: resume.outerHTML,
        structure,
      },
      {
        responseType: 'blob',
      }
    )

    const url = window.URL.createObjectURL(data)
    const link = document.createElement('a')
    link.href = url
    link.download = `${title}.pdf`
    link.click()

    window.URL.revokeObjectURL(url)
  }

  return {
    handleDownloadResume,
  }
}
