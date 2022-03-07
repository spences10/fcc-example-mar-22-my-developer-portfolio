<script context="module">
  import ProjectCard from '$lib/components/project-card.svelte'
  import { client } from '$lib/graphql-client'
  import { projectsQuery } from '$lib/graphql-queries'

  export const load = async () => {
    const { projects } = await client.request(projectsQuery)
    return {
      props: {
        projects,
      },
    }
  }
</script>

<script>
  export let projects
</script>

<svelte:head>
  <title>My Portfolio Projects</title>
</svelte:head>

<div
  class="grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6 lg:-mx-52"
>
  {#each projects as { name, description, image, slug }}
    <ProjectCard {name} {description} url={image[0].url} {slug} />
  {/each}
</div>
