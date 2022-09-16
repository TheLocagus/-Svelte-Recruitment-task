<script lang="ts">
  import Search from './search/Search.svelte'
  import Sort from './sort/Sort.svelte'
  import TableWithPeople from "./tableWithPeople/TableWithPeople.svelte";
  import {people} from "../../utils/data";

  let inputValue = '';
  let copyOfPeople = [...people];

  $: filteredPeople = copyOfPeople.filter(person => (person.name.toLowerCase()).includes(inputValue.toLowerCase()));

</script>

<style>

    h1 {
        text-align: center;
    }

</style>

<Search
        bind:inputValue={inputValue}/>
<Sort
        people={people}
        bind:copyOfPeople={copyOfPeople}/>

{#if filteredPeople.length !== 0}
    <TableWithPeople filteredPeople={filteredPeople}/>
{:else}
    <h1>
        Brak danych do wyświetlenia
    </h1>
{/if}