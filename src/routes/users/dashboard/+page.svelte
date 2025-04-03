<script>
  import {goto} from "$app/navigation";

  const {data} = $props();

  async function current() {
    const response = await fetch("/api/users/current");
    if (response.ok) {
      return await response.json();
    } else {
      await goto("/users/login")
    }
  }

  async function logout() {
    await fetch("/api/users/current", {
      method: "DELETE"
    });

    await goto("/users/login");
  }
</script>

{#await current()}
    Loading user
{:then data}
    <h1>Hello {data.user}</h1>
    <a href="#" onclick={logout}>Logout</a>
{/await}