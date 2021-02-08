<script>
  import { onMount } from 'svelte';
  import axios from 'axios';
  import { Skeleton, Star } from '../utils/index';
  import formatPrice from '../../functions/formatPrice';

  const splide = async () => {
    const { default: Splide } = await import('@splidejs/splide');
    const { default: URLHash } = await import('@splidejs/splide-extension-url-hash');

    new Splide('#product-list1', {
      perPage: 8,
      gap: '1.2rem',
      perMove: 1,
      trimSpace: false,
      height: '270px',
      pagination: false,
      breakpoints: {
        1440: { perPage: 6 },
        1125: { perPage: 5 },
        900: { perPage: 4 },
        750: { perPage: 3, gap: '1.1rem' },
        500: { perPage: 2, gap: '1rem' },
      },
    }).mount({ URLHash });
  };

  onMount(() => splide());

  const getData = async () => {
    try {
      const { data, status } = await axios.get('/dummy/katalog/alat-bahan.json');
      splide();
      if (status === 200) return data;
      throw new Error('Terjadi Kesalahan saat melakukan fetch');
    } catch (e) {
      console.error(e);
    }
  };
  const alatBahan = getData();
</script>

<style>
  #product-list1 {
    height: 270px;
    overflow: hidden;
  }
  .product {
    padding: 0 5%;
  }

  .item {
    height: 250px;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(155, 155, 155, 0.6);
    overflow: hidden;
  }
  figure {
    width: 100%;
    height: 170px;
    margin: 0;
    position: relative;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .category {
    position: absolute;
    right: 0;
    bottom:0;
    padding: 2px 7px;
    border-radius: 10px 0 0 10px;
    color: #fff;
    background-color: rgba(0,0,0, 0.7);
    font-size: .8rem;
  }

  .caption {
    padding: 5px 10px;
  }

  h3 {
    font-size: .9rem;
    margin: 8px 0;
    line-height: 1rem;
    height: 32px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    font-weight: bold;
  }
  .loadmore {
    display: inline-block;
    color: var(--mdc-theme-primary);
    font-size: .75em;
    margin-left: 30px;
  }
</style>

<div class="product">
  <h2> Produk Pilihan 
    <span> <a href="/katalog" class="loadmore"> Load More</a> </span>
  </h2>
  <div id="product-list1" class="splide">
    <div class="splide__track">
      <ul class="splide__list">

        {#await alatBahan}
          {#each [0, 1, 2, 3, 4, 5] as i (i)}
            <li class="splide__slide">
              <div class="item splide__slide__container">
                <figure>
                  <Skeleton width="100%" height="100%"/>
                  <span class="category"> <Skeleton width="70px" height="10px" /></span>
                </figure>
                <div class="caption">
                  <Skeleton width="90%" height="11px" />
                  <Skeleton width="60%" height="11px" />
                  <div class="price"><Skeleton width="50px" height="13px" style="margin-top:1rem" /></div>
                  <span class="rating"> <Skeleton width="70px" height="8px" style="margin-top:1.2rem" /></span>
                </div>
              </div>
            </li>
          {/each}

        {:then data}

          {#each data as { id, title, slug, picture, price, rating, category } (id)}
            <li class="splide__slide">  
              <div class="item splide__slide__container">
                <figure>
                  <img class="lazyload" src="/assets/images/thumbnail.svg" data-src={picture[0]} alt={title}>
                  <a href="/katalog/categories/{category.slug}}" class="category"> {category.title} </a>
                </figure>
                <div class="caption">
                  <h3><a href="/katalog/{slug}" rel="prefetch">{title}</a></h3>
                  <div class="price">Rp{formatPrice(price)}</div>
                  <span class="rating"> <Star rate={rating} /> </span>
                </div>
              </div>
            </li>
          {/each}
        {/await}
      </ul>
    </div>
  </div>
</div>