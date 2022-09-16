<script>
    export let filteredPeople;
</script>

<style>
    table {
        width: 500px;
        border: 2px solid orangered;
        border-spacing: 0;
        margin: 0 auto;
    }

    tr {
        text-align: center;
    }

    th {
        border-top: 1px solid red;
        border-bottom: 1px solid red;
        padding: 10px 0;
    }

    .first-th {
        border-top: none;
    }

    td {
        padding: 5px 0;
    }
</style>

<table>
    {#each filteredPeople as person, i}
        <tr>
            <th class:first-th={i === 0} colspan="2">Osoba nr. {i + 1}</th>
        </tr>
        {#each Object.keys(person) as key, i}
            <tr>
                <td>{key}</td>
                <td>{person[key]}</td>
            </tr>
        {/each}
    {/each}
</table>
