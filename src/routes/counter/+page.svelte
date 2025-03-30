<script>
    let counter = $state(0);

    function increment() {
      counter++;
    }
</script>

<h1>Counter : {counter}</h1>

<button onclick={increment}>Increment</button>