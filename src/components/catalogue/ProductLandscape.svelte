<script>
  export let name = 'Ini produk satu';
  export let pic = '/images/bg1-500.webp';
  export let price = 50000;
  export let city = 'Unknown';
  export let link = '';
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

<div class="product-item">
  <div class="information">
    <h2 class="text-overflow">{name}</h2>
    <span class="city"> <i class="material-icons">store</i> {city} </span>
    <span class="price"> Rp {price},-</span>
    <a href={link} class="buy-button"> Beli </a>
  </div>
  <div class="thumb">
    <img src={pic} alt="{name}">
  </div>
</div>