<script context="module">
  import { client } from '$lib/graphql-client'
  import { postsQuery } from '$lib/graphql-queries'
  import { marked } from 'marked'

  export const load = async () => {
    const { posts } = await client.request(postsQuery)
    return {
      props: {
        posts,
      },
    }
  }
</script>

<script>
  export let posts
</script>

<svelte:head>
  <title>My Portfolio | Blog</title>
</svelte:head>

<h1 class="text-4xl mb-10 font-extrabold">Bog posts</h1>

{#each posts as { title, slug, content, coverImage, tags }}
  <div class="card text-center shadow-2xl mb-20">
    <figure>
      <img src={coverImage.url} alt={title} />
    </figure>
    <div class="card-body prose">
      <h2 class="title">{title}</h2>
      {@html marked(content).slice(0, 150)}
      <div class="flex justify-center mb-5 space-x-2">
        {#each tags as tag}
          <span class="badge badge-primary mr-2">{tag}</span>
        {/each}
      </div>
      <div class="justify-center card-actions">
        <a class="btn btn-outline btn-primary" href={`/posts/${slug}`}
          >Read &rArr;</a
        >
      </div>
    </div>
  </div>
{/each}
