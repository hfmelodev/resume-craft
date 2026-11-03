import type Stripe from 'stripe'
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

type TranslatePayload = {
  content: ResumeContentData
  language: ResumeLanguages
}

async function translate(payload: TranslatePayload) {
  const { data } = await API.post<IAGenerationResponse>('/generate/translate', payload)

  return data
}

async function getCredits() {
  const { data } = await API.get<{ credits: number }>('/credits')

  return data?.credits ?? 0
}

async function getPackageCredits() {
  const { data } = await API.get<{ prices: Stripe.Price[] }>('/credits/packages')

  return data?.prices ?? []
}

async function getCheckoutUrl(priceId: string, currentPathname: string) {
  const { data } = await API.post<{ url: string }>('/credits/packages/checkout', { priceId, currentPathname })

  return data
}

export const ApiService = {
  getResumeUrl,
  generateContentForJob,
  fixContent,
  translate,
  getCredits,
  getPackageCredits,
  getCheckoutUrl,
}
