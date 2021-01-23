<script>
  import { onMount } from 'svelte';
  import axios from 'axios';
  import Skeleton from '../utils/Skeleton.svelte';

  const splide = async () => {
    const { default: Splide } = await import('@splidejs/splide');
    new Splide('#splide', {
      perPage: 4,
      gap: '1.5rem',
      arrows: false,
      pagination: false,
      breakpoints: {
        1000: { perPage: 3, gap: '1rem' },
        780: { perPage: 2, gap: '1rem' },
        550: { perPage: 1, gap: '1rem' },
      },
    }).mount();
  };

  onMount(() => splide());

  const getData = async () => {
    try {
      const dataReturn = [];
      const arData = [];
      const { status, data } = await axios('/dummy/tutorials.json');
      for (let i = 0; i < 6; i++) {
        const rand = Math.floor(Math.random() * (data.length - 1) + 1);
        // eslint-disable-next-line no-continue
        if (arData.includes(rand)) continue;
        arData.push(rand);
        dataReturn.push(data[rand]);
      }
      splide();
      if (status === 200) return dataReturn;
      throw new Error('Gagal Melakukan Fetxh Data');
    } catch (e) {
      console.error(e);
    }
  };

  const tutorials = getData();
</script>

<style>
  #splide {
    background-color: #f1f1f1;
    padding:10px;
    cursor: grab;
    height: 100px;
    overflow: hidden;
  }
  .post-item {
    display: flex;
    width:100%;
    justify-content: center;
    align-items: flex-start;
    background-color: #fff;
    /* border: 1px solid #ccc; */
    border-radius: 7px;
    overflow: hidden;
  }
  .post-item img {
    width: 100%;
    height:100%;
    object-fit: cover;
  }
  .slide-picture {
    flex-basis: 35%;
    margin-right:5px;
    height:80px;
  }
  .post-caption {
    flex-basis: 65%;
    margin: 10px;
  }
  .post-title {
    font-weight: bold;
    text-transform: capitalize;
    font-weight: 1.05em;
    line-height: 1rem;
  }

  .category {
    color: #666;
    padding: 0 10px;
    display: inline-block;
    position: relative;
    font-weight: lighter;
    font-size: .8rem;
  }
  .category::before {
    content: '';
    width:3px;
    height:3px;
    border-radius: 100%;
    position: absolute;
    left:0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #888;
  }
</style>

<div class="post-list splide" id="splide">
  <div class="splide__track">
    <ul class="splide__list">
      {#await tutorials}
        {#each [1, 2, 3, 4] as i (i)}
          <li class="splide__slide">
            <div class="post-item splide__slide__container">
              <div class="slide-picture">
                <Skeleton width="100%" height="100%" style="margin:0"/>
              </div>
              <div class="post-caption">
                <span class="post-title"><Skeleton width="80%" height="12px" /></span>
                <span class="post-title"><Skeleton width="50%" height="12px" /></span>
                <span class="category"><Skeleton width="50px" height="8px" /> </span>
                <span class="category"><Skeleton width="30px" height="8px" /></span>
              </div>
            </div>
          </li>
        {/each}

      {:then data}
  
        {#each data as {id, title, slug, thumbnail, estimasi, category} (id)}
          <li class="splide__slide">
            <div class="post-item splide__slide__container">
              <div class="slide-picture">
                <img class="lazyload" src="/assets/images/thumbnail.svg" data-src={thumbnail} alt={title} />
              </div>
              <div class="post-caption">
                <a href="/tutorial/{slug}" rel="prefetch" class="post-title text-overflow">{title}</a>
                <a href="/tutorial/categories/{category.slug}" class="category">{category.title}</a>
                <span class="category">{estimasi}</span>
              </div>
            </div>
          </li>
        {/each}
      {/await}

    </ul>
  </div>
</div>
