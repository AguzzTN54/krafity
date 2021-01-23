<script>
  import axios from 'axios';
  import Skeleton from '../utils/Skeleton.svelte';

  const getData = async () => {
    try {
      const { data, status } = await axios.get('/dummy/tutorials/categories/recomended.json');
      if (status === 200) return data;
      throw new Error('Terjadi Kesalahan Saat melakukan Fetch');
    } catch (e) {
      console.error(e);
    }
  };

  const category = getData();
</script>

<style>
  h2 {
    font-size: 1.3rem;
    text-align: center;
  }
  
  .list {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }

  .item {
    width:110px;
    height:110px;
    overflow: hidden;
    border-radius: 10px;
    position: relative;
    color: #fff;
    margin: 5px;
  }
  .item::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0));
  }

  .preload > .item::after {
    content: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .caption {
    display: block;
    position: absolute;
    bottom:0;
    left:0;
    color: #fff;
    z-index: +1;
    font-size: .7rem;
    padding: 5px 10px;
  }
</style>

<div class="recomended">
  <h2> Kategori Pilihan </h2>

  <div class="list">

    {#await category}
      {#each [1, 2, 3, 4] as i (i)}
        <span class="preload"> 
          <div class="item">
            <Skeleton width="100%" height="100%" />
          </div>
        </span>
      {/each}

    {:then data} 
      
      {#each data as { title, slug, thumbnail} (slug)}
        <a href="/tutorial/categories/{slug}"> 
          <div class="item">
            <img class="lazyload" src="/assets/images/thumbnail.svg" data-src={thumbnail} alt={title} />
            <div class="caption">
              <h3> {title} </h3>
            </div>
          </div>
        </a>
      {/each}

    {/await}

  </div>
</div>