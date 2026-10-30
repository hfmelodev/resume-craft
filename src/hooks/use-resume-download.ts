import { useMutation } from '@tanstack/react-query'
import { useFormContext } from 'react-hook-form'
import { ApiService } from '@/server/api'

export const useResumeDownload = () => {
  const { getValues } = useFormContext<ResumeData>()

  const { mutateAsync: handleGetResumeUrl, isPending: isDownloadingResume } = useMutation({
    mutationFn: ApiService.getResumeUrl,
  })

  const handleDownloadResume = async () => {
    const resume = document.getElementById('resume-content')

    if (!resume) return

    const structure = getValues('structure')
    const title = getValues('content.infos.fullName')

    const url = await handleGetResumeUrl({
      html: resume.outerHTML,
      structure,
    })

    const link = document.createElement('a')
    link.href = url
    link.download = `${title}.pdf`
    link.click()

    window.URL.revokeObjectURL(url)
  }

  return {
    handleDownloadResume,
    isDownloadingResume,
  }
}
