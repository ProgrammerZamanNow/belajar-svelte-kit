<script>
  import {onMount} from "svelte";
  import {invalidateAll} from "$app/navigation";

  const {data} = $props();

  onMount(() => {
    invalidateAll()
  })
</script>

<h1>Products</h1>

<ul>
    {#each data.products as product}
        <li>
            <a href="/products/{product}">{product}</a>
        </li>
    {/each}
</ul>