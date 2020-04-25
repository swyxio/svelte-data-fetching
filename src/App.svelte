<script>
  export let name;
  import Card from "./Card.svelte";
  let idx = 0;
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h3 {
    text-align: center;
  }
  .count {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main class="App">

  <h3>
    <em>Characters of</em>
    Stan Lee
  </h3>
  <div class="count">
    <label>
      <input type="number" bind:value={idx} min="0" />
      -{' '} {idx + 2} of 296 characters
    </label>
  </div>
  <Card {idx} />
  <Card idx={idx + 1} />
  <Card idx={idx + 2} />
</main>
