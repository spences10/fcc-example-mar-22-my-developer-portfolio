import { client } from '$lib/graphql-client'
import { authorsQuery, socialsQuery } from '$lib/graphql-queries'
import { writable } from 'svelte/store'

export const socialStore = writable([])
export const authorsStore = writable([])

export const fetchSocials = async () => {
  const { socials } = await client.request(socialsQuery)

  return socialStore.set(socials[0])
}

export const fetchAuthors = async () => {
  const { authors } = await client.request(authorsQuery)

  return authorsStore.set(authors[0])
}
