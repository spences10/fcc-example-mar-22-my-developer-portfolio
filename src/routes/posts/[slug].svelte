<script context="module">
  import { client } from '$lib/graphql-client'
  import { postQuery } from '$lib/graphql-queries'
  import { marked } from 'marked'

  export const load = async ({ params }) => {
    const { slug } = params
    const variables = { slug }
    const { post } = await client.request(postQuery, variables)
    return {
      props: { post },
    }
  }
</script>

<script>
  export let post
</script>

<svelte:head>
  <title>Blog | {post.title}</title>
</svelte:head>

<div class="sm:-mx-5 md:-mx-10 lg:-mx20 xl:-mx-38 mb-5">
  <img
    class="rounded-lg"
    src={post.coverImage.url}
    alt={post.title}
  />
</div>

<div class="prose prose-xl">
  <h1>{post.title}</h1>
</div>

<p class="text-secondary text-xs tracking-widest font-semibold my-4">
  {new Date(post.date).toDateString()}
</p>

<div class="flex mb-5 space-x-2">
  {#each post.tags as tag}
    <span class="badge badge-primary mr-2">{tag}</span>
  {/each}
</div>

<article class="prose prose-xl">
  {@html marked(post.content)}
</article>
