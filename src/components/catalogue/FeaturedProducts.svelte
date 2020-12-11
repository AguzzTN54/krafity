<script>
  import { onMount } from 'svelte';
  import axios from 'axios';
  import Skeleton from '../utils/Skeleton.svelte';

  const splide = async () => {
    const { default: Splide } = await import('@splidejs/splide');
    const { default: URLHash } = await import('@splidejs/splide-extension-url-hash');

    new Splide('#trending-post', {
      perPage: 5,
      gap: '1rem',
      perMove: 1,
      trimSpace: false,
      height: '338px',
      padding: {
        right: '5rem',
        left: '5rem',
      },
      breakpoints: {
        1125: { perPage: 4 },
        900: { perPage: 3 },
        750: { perPage: 2 },
        500: { perPage: 1 },
      },
    }).mount({ URLHash });
  };

  onMount(() => splide());

  const getData = async () => {
    try {
      const { data, status } = await axios.get('/dummy/katalog/pengrajin.json');
      splide();
      if (status === 200) return data;
      throw new Error('Terjadi Kesalahan Saat melakukan Fetch');
    } catch (e) {
      console.error(e);
    }
  };

  const products = getData();
</script>

<style>
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    display: block;
    text-align: center;
    padding: 10px;
    margin-top: 5px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }

  .slide-picture {
    height:300px;
    position: relative;
  }
  .post-list {
    height: 338px;
    overflow: hidden;
  }
  .post-caption {
    display: block;
    position: absolute;
    left:50%;
    transform: translateX(-50%);
    bottom: 10px;
    width:90%;
    background-color: #fff;
    border-radius: 10px;
    padding:15px;
    box-shadow: 0 33px 15px -10px rgb(41 21 24 / 30%), 0 35px 20px 5px rgba(56, 26, 31, 0.05);
  }
  .post-title {
    font-weight: bold;
    text-transform: capitalize;
    font-weight: 1.05em;
    line-height: 1rem;
  }

  .splide__track {
    overflow: initial !important;
  }
</style>

<h1>Trendings</h1>
<div class="post-list splide" id="trending-post">
  <div class="splide__track">
    <ul class="splide__list">

      {#await products}
        {#each [1, 2, 3, 4, 5, 6] as i (i)}
          <li class="splide__slide">
            <div class="post-item splide__slide__container">
              <div class="slide-picture">
                <Skeleton width="100%" height="100%" style="border-radius:15px"/>
                <div class="post-caption">
                  <Skeleton height="12px" width="90%"/>
                  <Skeleton height="12px" width="50%"/>
                  <span class="category">
                    <Skeleton style="display:inline-block" width="50px" height="8px"/>
                  </span>
                  <span class="category">
                    <Skeleton style="display:inline-block" width="50px" height="8px"/>
                  </span>
                </div>
              </div>
            </div>
          </li>
        {/each}

      {:then data} 

        {#each data as { id, title, slug, picture, user } (id)}
          <li class="splide__slide">
            <div class="post-item splide__slide__container">
              <div class="slide-picture">
                <img class="lazyload" src="/assets/images/thumbnail.svg" data-src={picture[0]} alt={title} />
                <div class="post-caption">
                  <a href="/katalog/{slug}" class="text-overflow post-title">{title}</a>
                  <a href="/user/{user.username}" class="category">{user.name}</a>
                </div>
              </div>
            </div>
          </li>
        {/each}
        
      {/await}
      
    </ul>
  </div>
</div>