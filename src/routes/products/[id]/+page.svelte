<script>
  import {onMount} from "svelte";
  import {invalidateAll} from "$app/navigation";

  const {data} = $props();

  onMount(() => {
    invalidateAll()
  })
</script>

<a href="/products">Back to products</a>

<h1>{data.id} - {data.name}</h1>
<p>{data.description}</p>
<p>{data.price}</p>