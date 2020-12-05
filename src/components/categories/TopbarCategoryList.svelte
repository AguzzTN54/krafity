<script>
  import data from '../../dummy/categories.json';

  const { categories } = data;
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
    {#if categories.length > 0}
      {#each categories as category}
        <a href="blog/categories/{category}" class="category-item">
          {category}
        </a>
      {/each}
    {:else}
      <span>no Data found</span>
    {/if}

  </div>
</div>