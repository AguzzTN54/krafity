<script>
  import { Skeleton } from '../utils/index';

  export let skeleton;
  export let data = {
    title: 'Product Title',
    slug: '',
    picture: ['/assets/images/bg1-500.webp'],
    price: 0,
    category: { name: 'Unknown' },
    shop: [{ name: 'none', url: '' }],
  };

  const {
    title, picture, price, slug, category, shop,
  } = data;
</script>

<style>
  .product-item {
    display: flex;
    background-color: #fff;
    padding: 15px;
    border: 1px solid #ddd;
    justify-content: space-between;
    border-radius: 5px;
  }
  .information {
    margin-right: 15px;
  }

  .thumb {
    min-width: 100px;
    width: 100px;
    height: 100px;
  }
  h2 {
    font-size: 1rem;
    margin-bottom: -2px;
  }
  .city, .city > i {
    font-size: .8rem;
    color: #555;
  }
  i {
    font-size: inherit;
  }
  .price {
    font-weight: bold;
    display: block;
  }
  .buy-button {
    background-color: var(--mdc-theme-primary);
    color: #fff;
    border: 0;
    border-radius: 5px;
    margin-top: 10px;
    display: inline-block;
    padding: 7px 17px;
  }
</style>

{#if skeleton}
  <div class="product-item">
    <div class="information">
      <h2 class="text-overflow" style="width:100%"><Skeleton width="100%" height="10px" /></h2>
      <span class="city"> <Skeleton width="100px" height="8px" /> </span>
      <span class="price"> <Skeleton width="50px" height="13px" /></span>
    </div>
    <div class="thumb">
      <Skeleton width="100%" height="100%" />
    </div>
  </div>
{:else}
  <div class="product-item">
    <div class="information">
      <h2 class="text-overflow"><a href="/katalog/{slug}">{title}</a></h2>
      <span class="city"> <i class="material-icons">store</i> {category.title} </span>
      <span class="price"> Rp {price},-</span>
      <a href={shop[0].url} target="_blank" class="buy-button"> Beli </a>
    </div>
    <div class="thumb">
      <img class="lazyload" src="/assets/images/thumbnail.svg" data-src={picture[0]} alt="{title}">
    </div>
  </div>
{/if}