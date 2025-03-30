<script>
    const {children} = $props();
</script>

<ul>
    <li><a href="/">Home</a></li>
    <li><a href="/counter">Counter</a></li>
    <li><a href="/profile/user">Profile</a></li>
</ul>

{@render children()}