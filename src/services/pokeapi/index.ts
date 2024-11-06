import { useCallback } from 'react'
import { endpoint } from './config'

export type PokeApiResponse = {
  count: number
  next: string
  previous: string | null
  results: {
    name: string
    url: string
  }[]
}

const list = async (cursor: any) => {
  const url = cursor ? cursor : `${endpoint}/pokemon?offset=0&limit=20`

  const res = await fetch(url)
  return res.json()
}

const detail = async (url: string) => {
  const res = await fetch(url)
  return res.json()
}

export { list, detail }
