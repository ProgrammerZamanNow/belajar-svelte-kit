<script>
    import {goto} from "$app/navigation";

    let location = $state("");

    function go(){
      goto(location)
    }
</script>

<div>
    <label for="location">Location</label>
    <input type="text" id="location" bind:value={location}>
    <button onclick={go}>Go</button>
</div>