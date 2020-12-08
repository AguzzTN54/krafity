<script>
  import Banner from '../../components/Banner.svelte';
  import { ProductComponent2 } from '../../components/catalogue/index';
</script>

<style>
  #product {
    padding: 5%;
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

<Banner title="Toko" />
<div class="shop-content" id="product">
  <div class="list">
    <ProductComponent2 />
    <ProductComponent2 />
    <ProductComponent2 />
    <ProductComponent2 />
    <ProductComponent2 />
    <ProductComponent2 />
    <ProductComponent2 />
    <ProductComponent2 />
    <ProductComponent2 />
    <ProductComponent2 />
    <ProductComponent2 />
  </div>
</div>