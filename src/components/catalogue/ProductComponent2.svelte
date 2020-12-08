<script>
  import { Star } from '../utils/index';
</script>

<style>
  .item {
    min-width:150px;
    width: 15%;
    height: 300px;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(155, 155, 155, 0.6);
    margin: 10px;
    overflow: hidden;
  }
  figure {
    width: 100%;
    height:170px;
    margin:0;
    position: relative;
  }

  @media screen and (max-width: 400px) {
    .item {
      width: 45%;
      margin: 5px;
      min-width: unset;
      height: 250px;
    }
    figure {
      height: 130px;
    }
  }

  /* @media screen and (max-width: 320px) {
    .item {
      width: 80%;
      height: 200px;
    }
    figure {
      height: 150px;
    }
  } */

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
    /* height: 32px; */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    font-weight: bold;
  }

  .avatar {
    font-size: small;
  }
  .avatar img {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin-right: 3px;
  }
</style>

<div class="item">
  <figure>
    <img src="/assets/images/bg1-500.webp" alt="Gambar">
    <a href="/katalog/categories" class="category"> Barang Bekas </a>
  </figure>
  <div class="caption">
    <h3>Ini nama Produk</h3>
    <span class="avatar"> <img src="/assets/images/thumbnail.svg" alt="Avatar"> Avatar</span>
    <div class="price">Rp5000,-</div>
    <span class="rating"> <Star rate="3" /> </span>
  </div>
</div>
