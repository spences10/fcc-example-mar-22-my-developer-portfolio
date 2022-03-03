<script context="module">
  import ProjectCard from '$lib/components/project-card.svelte'
  import { client } from '$lib/graphql-client'

  export const load = async () => {
    const { projects } = await client.request(`query GetProjects {
      projects {
        name
        slug
        description
        tags
        demo
        sourceCode
        image {
          url
        }
      }
    }`)
    return { props: { projects } }
  }
</script>

<script>
  export let projects
</script>

{#each projects as { name, description, image, slug }}
  <ProjectCard {name} {description} url={image[0].url} {slug} />
{/each}

