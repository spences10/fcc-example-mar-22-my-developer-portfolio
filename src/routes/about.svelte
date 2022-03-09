<script context="module">
  import { client } from '$lib/graphql-client'
  import { authorsQuery } from '$lib/graphql-queries'
  import { marked } from 'marked'

  export const load = async () => {
    const { authors } = await client.request(authorsQuery)

    return { props: { authors } }
  }
</script>

<script>
  export let authors

  const {
    name,
    intro,
    bio,
    picture: { url },
  } = authors[0]
</script>

<h1 class="font-bold text-center mb-20 text-5xl">About Me</h1>

<div class="flex mb-40 items-end">
  <div class="mr-6">
    <h2 class="text-3xl mb-4 font-bold tracking-wider">
      {name}
    </h2>
    <p class="text-xl mb-4">{intro}</p>
  </div>
  <img class="mask mask-squircle h-48" src={url} alt={name} />
</div>

<article class="prose prose-xl">
  {@html marked(bio)}
</article>
