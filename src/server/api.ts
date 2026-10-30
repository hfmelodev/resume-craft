import { API } from '@/lib/axios'

type ResumeDownloadPayload = {
  html: string
  structure: ResumeStructureData
}
async function getResumeUrl(payload: ResumeDownloadPayload) {
  const { data } = await API.post('/resume/download', payload, {
    responseType: 'blob',
  })

  return window.URL.createObjectURL(data)
}

export const ApiService = {
  getResumeUrl,
}
