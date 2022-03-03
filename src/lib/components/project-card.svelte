<script>
  export let url = ''
  export let name = ''
  export let slug = ''
  export let description = ''
</script>

<article class="relative group shadow-2xl col-span-2">
  <img class="object-cover h-full" src={url} alt={name} />
  <a href={`/projects/${slug}`}>
    <div
      class="absolute bottom-0 left-0 right-0 lg:opacity-0 group-hover:opacity-100 bg-primary p-4 duration-300 text-primary-content"
    >
      <h2 class="font-bold lg:text-xl">{name}</h2>
      <p class="text-sm lg:text-xl">{description.slice(0, 80)}</p>
    </div>
  </a>
</article>
