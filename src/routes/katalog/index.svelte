<script context="module">
  export async function preload() {
    const res = await this.fetch('/dummy/katalog.json');
    const katalog = res.json();
    if (res.status === 200) return { katalog };
    this.error(res.status, res.message);
  }
</script>

<script>
  import Banner from '../../components/Banner.svelte';
  import { ProductComponent2 } from '../../components/catalogue/index';
  import { BreadCrumbs } from '../../components/utils/index';

  export let katalog;
</script>

<style>
  #product {
    padding: 35px 5%;
  }
  .list {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: auto;
  }
</style>

<svelte:head>
  <title>Toko Kreasi Kerajinan Indonesia</title>
</svelte:head>

<!-- <Banner title="Toko" /> -->
<BreadCrumbs />
<div class="shop-content" id="product">
  <div class="list">
    {#await katalog}
      <ProductComponent2 skeleton />
      <ProductComponent2 skeleton />
      <ProductComponent2 skeleton />
      <ProductComponent2 skeleton />
      <ProductComponent2 skeleton />
    {:then dataList}
      {#each dataList as data (data.id)}
      <ProductComponent2 {data} />
      {/each}
    {/await}
  </div>
</div>