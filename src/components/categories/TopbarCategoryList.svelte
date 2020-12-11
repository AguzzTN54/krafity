<script>
  import axios from 'axios';
  import Skeleton from '../utils/Skeleton.svelte';

  const getData = async () => {
    try {
      const { data, status } = await axios.get('/dummy/tutorials/categories.json');
      if (status === 200) return data;
      throw new Error('Terjadi Kesalahan Saat melakukan fetch');
    } catch (e) {
      console.error(e);
    }
  };

  const categories = getData();
</script>

<style>
  .top-bar-categories {
    width: 100%;
    overflow-x: auto;
    padding: 2PX 10px;
    border-width: 1px 0;
    border-color: #ccc;
    border-style: solid;
  }
  .top-bar-categories::-webkit-scrollbar {
    display: none;
  }
  .top-bar-categories:hover::-webkit-scrollbar {
    display: unset;
  }

  .categories {
    display: flex;
    justify-content: center;
    white-space: nowrap;
  }

  .category-item {
    padding: 0 5px;
    margin: 0 3px;
    display: inline-block;
    position: relative;
    text-decoration:none;
    text-transform: capitalize;
  }
  .category-item::after {
    content: '';
    display: block;
    height: 80%;
    position: absolute;
    top:50%;
    right: -3px;
    transform: translateY(-50%);
    border-right: 1px solid #ccc;
  }
  .category-item:last-child::after {
    content: none;
  }
</style>

<div class="top-bar-categories">
  <div class="categories">
    
    {#await categories}
      {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] as i (i)}
        <Skeleton width="50px" height="15px"/>
      {/each}
      
    {:then data}
      
      {#if data.length > 0}
        {#each data as { slug, title } (slug)}
          <a href="/tutorial/categories/{slug}" class="category-item">
            {title}
          </a>
        {/each}
      {:else}
        <span>no Data found</span>
      {/if}
    {/await}

  </div>
</div>