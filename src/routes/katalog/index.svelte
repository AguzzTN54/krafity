<script context="module">
  export async function preload() {
    const res = await this.fetch('/dummy/katalog.json');
    const katalog = res.json();
    if (res.status === 200) return { katalog };
    this.error(res.status, res.message);
  }
</script>

<script>
  import { stores } from '@sapper/app';
  import MetaTags from '../../components/MetaTags.svelte';
  import { Filter, ProductComponent2 } from '../../components/catalogue/index';
  import { BreadCrumbs } from '../../components/utils/index';

  const { page } = stores();
  $: ({ query } = $page);
  $: ({ type, category, s } = query);

  const showText = () => {
    if (s) return `dengan kata kunci ${s}`;
    if (category) return `dalam kategori <b>${category}</b>`;
    if (type) return `untuk <b>${type}</b>`;
    return ' dari Katalog';
  };

  export let katalog;
  const title = 'Toko Kreasi Kerajinan Indonesia';
</script>

<svelte:head>
  <title>{title}</title>
  <MetaTags {title} />
</svelte:head>

<BreadCrumbs />
<div class="shop-content" id="product">
  <Filter />
  <div class="results">
    {#await katalog}
      <h2>Mencari data ...</h2>
      <div class="list">
        <ProductComponent2 skeleton />
        <ProductComponent2 skeleton />
        <ProductComponent2 skeleton />
        <ProductComponent2 skeleton />
        <ProductComponent2 skeleton />
      </div>
    {:then dataList}
      <h2>
        Menampilkan
        {dataList.length}
        item
        {@html showText()}
      </h2>
      <div class="list">
        {#each dataList as data (data.id)}
          <ProductComponent2 {data} />
        {/each}
      </div>
    {/await}
  </div>
</div>

<style>
  #product {
    padding: 20px 5%;
  }
  h2 {
    font-size: 0.8rem;
  }
  .shop-content {
    display: flex;
  }
  .results {
    width: 80%;
  }
  .list {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: auto;
  }

  @media screen and (max-width: 750px) {
    #product {
      padding-top: 5px;
    }
    .shop-content {
      flex-direction: column;
    }
    .results {
      width: 100%;
    }
  }
</style>
