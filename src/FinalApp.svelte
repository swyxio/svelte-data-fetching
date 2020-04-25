<script>
  import Card from "./Card.svelte";
  import Button from "./Button.svelte";
  import { flip } from "svelte/animate";
  let isAscending = true;
  let idx = 0;
  let len = 3;
  let arr;
  $: {
    arr = [...Array(len).keys()].map(x => idx + x);
    if (isAscending) arr.reverse();
  }
  $: console.log({ arr, isAscending });
</script>

<main class="App">
  <h3>
    <em>Characters of</em>
    Stan Lee
  </h3>
  <div class="controls">
    <label>
      Show
      <input type="number" bind:value={len} min="0" />
    </label>
    <div>
      <input id="ascending" type="checkbox" bind:checked={isAscending} />
      <label for="ascending">Ascending?</label>
    </div>

    <Button label={idx} on:click={() => idx++} />

  </div>
  {#each arr as id (id)}
    <div animate:flip={{ duration: 1000 }}>
      <Card idx={id} />
    </div>
  {:else}
    <img
      alt="snap"
      src="https://i.insider.com/5ae3327e19ee8657008b45f6?width=750&format=jpeg&auto=webp"
    />
  {/each}
</main>
