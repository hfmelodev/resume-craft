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

type IAGenerationPayload = {
  jobTitle: string
  jobDescription?: string
}

type IAGenerationResponse = {
  data: string
}

async function generateContentForJob(payload: IAGenerationPayload) {
  const { data } = await API.post<IAGenerationResponse>('/generate/job-title', payload)

  return data
}

async function fixContent(content: ResumeContentData) {
  const { data } = await API.post<IAGenerationResponse>('/generate/fix-content', { content })

  return data
}

export const ApiService = {
  getResumeUrl,
  generateContentForJob,
  fixContent,
}
