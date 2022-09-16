<script>
    export let inputValue;
</script>

<style>
    input {
        margin: 20px;
        padding: 5px 10px;
        outline: none;
    }
</style>

<input type="text" placeholder="Wyszukaj" bind:value={inputValue}>
