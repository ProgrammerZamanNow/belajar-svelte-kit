<script>
  import {onMount} from "svelte";
  import {invalidateAll} from "$app/navigation";

  const {data} = $props();

  async function getProduct() {
    const response = await fetch(`/api/products/${data.id}.json`);
    return response.json();
  }

  onMount(() => {
    invalidateAll()
  })
</script>

<a href="/products">Back to products</a>

{#await getProduct()}
    <p>Loading product</p>
{:then product}
    <h1>{product.id} - {product.name}</h1>
    <p>{product.description}</p>
    <p>{product.price}</p>
{:catch error}
    <p>Error: {error.message}</p>
{/await}