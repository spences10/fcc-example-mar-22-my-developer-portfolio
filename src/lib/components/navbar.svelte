<script>
  let pages = [`projects`, `posts`, `about`]
</script>

<nav class="navbar bg-neutral mb-20 shadow-xl">
  <div class="navbar-start">
    <p class="btn btn-ghost">
      <a href="/">Portfolio and Blog</a>
    </p>
  </div>
  <div class="navbar-end">
    <div class="dropdown dropdown-left lg:hidden">
      <div tabindex="0" class="m-1 btn btn-ghost">Links</div>
      <ul
        tabindex="0"
        class="bg-base-100 text-neutral-content rounded-box shadow p-2 menu dropdown-content"
      >
        {#each pages as page}
          <li>
            <a class="uppercase" href={`/${page}`}>{page}</a>
          </li>
        {/each}
      </ul>
    </div>
    <ul class="hidden flex-none px-2 mx-2 lg:flex">
      {#each pages as page}
        <li class="btn btn-ghost">
          <a href={`/${page}`}>{page}</a>
        </li>
      {/each}
    </ul>
  </div>
</nav>
