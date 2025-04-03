<script>
    const {data} = $props();
</script>

<h1>User Profile</h1>

<ul>
    <li>User : {data.user}</li>
    <li>Name : {data.name}</li>
    <li>Email : {data.email}</li>
</ul>