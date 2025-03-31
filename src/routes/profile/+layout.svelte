<script>
    const {children, data} = $props();
</script>

<ul>
    <li>Hi {data.user}</li>
    <li><a href="/profile/user">Profile</a></li>
    <li><a href="/profile/wallet">Wallet</a></li>
    <li><a href="/profile/address">Address</a></li>
</ul>

{@render children()}