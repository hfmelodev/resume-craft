import axios, { isAxiosError } from 'axios'

export const API = axios.create({
  baseURL: '/api',
})

// Usa a mensagem enviada pela rota (ex.: 403 sem créditos); erro de rede ou sem corpo cai no fallback
export function getApiErrorMessage(error: unknown, fallback: string) {
  return (isAxiosError<{ message?: string }>(error) && error.response?.data?.message) || fallback
}
