<script lang="ts">
  import type {Person} from "../types";
  import {SortEnum} from "../types"

  export let copyOfPeople;
  export let people;
  let activeAsc = false;
  let activeDesc = false;

  const sortByClick = (sortType: SortEnum) => {
    switch (sortType) {
      case `${SortEnum.asc}`: {
        copyOfPeople.sort((a: Person, b: Person) => a.name.localeCompare(b.name))
        copyOfPeople = copyOfPeople
        activeAsc = true;
        activeDesc = false;
        break;
      }
      case `${SortEnum.desc}`: {
        copyOfPeople.sort((a: Person, b: Person) => b.name.localeCompare(a.name))
        copyOfPeople = copyOfPeople
        activeDesc = !activeDesc
        activeDesc = true;
        activeAsc = false;
        break;
      }
      default: {
        copyOfPeople = [...people];
        activeAsc = false;
        activeDesc = false;
      }
    }
  }

</script>

<style>
    .sort-container {
        margin: 0 auto 40px;
    }

    .sort-container .sort-container__intro h2 {
        text-align: center;
    }

    button {
        margin-right: 5px;
        padding: 5px 10px;
        background-color: rgba(215, 215, 215, 0.7);
        border: 1px solid orangered;
        cursor: pointer;
        font-size: 14px;
        border-radius: 5px;
    }

    .active {
        background-color: orangered;
        color: white;
        border: 1px solid gray;
    }
</style>

<div class="sort-container">
    <div class="sort-container__intro">
        <h2>Sortuj</h2>
    </div>
    <div class="sort-container__btns">
        <button id="asc-btn" class:active={activeAsc} on:click={() => sortByClick(SortEnum.asc)}>Od A do Z</button>
        <button id="desc-btn" class:active={activeDesc} on:click={() => sortByClick(SortEnum.desc)}>Od Z do A</button>
        <button id="reset-btn" on:click={() => sortByClick(SortEnum.reset)}>Reset</button>
    </div>
</div>