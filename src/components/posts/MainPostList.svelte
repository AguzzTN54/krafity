<script>
  import axios from 'axios';
  import HPostComponent from './HPostComponent.svelte';

  const getData = async () => {
    try {
      const dt = await axios.get('/dummy/tutorials.json');
      if (dt.status === 200) return dt.data;
      throw new Error('Terjadi Kesalahan saat melakukan fetcing');
    } catch (e) {
      console.error(e);
    }
  };

  const tutorials = getData();
</script>

<style>
  .load-more {
    color: var(--mdc-theme-primary);
    border: 1px solid var(--mdc-theme-primary);
    border-radius: 5px;
    padding: 10px 15px;
    margin: 15px 20px;
    display: inline-block
  }

  .load-more:hover {
    color: #fff;
    background-color: var(--mdc-theme-primary);
  }
</style>

<div class="main-post-list">
  <h2> Tutorial </h2>
  <div class="main-list">

    {#await tutorials}
      {#each [1, 2, 3, 4, 5] as i (i)}
        <HPostComponent skeleton />
      {/each}

    {:then tutor} 
      {#each tutor as data (data.id)}
        <HPostComponent data={data} />
      {/each}

    {/await}

  </div>

  <div class="text-center">
    <a href="/" class="load-more"> Load More </a>
  </div>
</div>