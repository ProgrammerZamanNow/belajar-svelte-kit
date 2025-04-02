<script>
  const {data} = $props();
</script>

<ul>
    {#each data.todos as todo}
        <li>{todo}</li>
    {/each}
</ul>