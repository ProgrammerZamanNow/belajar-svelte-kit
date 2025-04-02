<script>
    import {page} from "$app/state";

    const {children} = $props();
</script>

<p>{page.url.pathname}</p>

<ul>
    <li><a href="/">Home</a></li>
    <li><a href="/counter">Counter</a></li>
    <li><a href="/profile/user">Profile</a></li>
    <li><a href="/products">Products</a></li>
</ul>

{@render children()}