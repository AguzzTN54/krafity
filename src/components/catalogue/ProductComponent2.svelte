<script>
  import { Star } from '../utils/index';
</script>

<style>
  .product {
    padding: 5%;
  }
  .list {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .item {
    min-width: 150px;
    width: 14%;
    height: 250px;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(155, 155, 155, 0.6);
    margin: 5px;
    overflow: hidden;
  }
  figure {
    width: 100%;
    height:170px;
    margin:0;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
</style>

<div class="product">
  <h2> Produk Pilihan 
    <span> <a href="/"> Load More</a> </span>
  </h2>

  <div class="list">
    
    {#each [0, 1, 2, 3, 4, 5, 6, 7, 8] as i (i)}
      
    <div class="item">
      <figure>
        <img src="/images/bg1-500.webp" alt="Gambar">
      </figure>
      <div class="caption">
        <h3>Ini nama Produk</h3>
        <span class="rating"> <Star rate="5" /> </span>
        <div class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quam provident possimus eum repellat cumque eligendi praesentium consequuntur molestiae et!
        </div>
        <div class="price">Rp5000,-</div>
      </div>
    </div>

    {/each}

  </div>
</div>