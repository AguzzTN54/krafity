<script>
  import { Skeleton, Star } from '../utils/index';

  export let skeleton;
  export let data = {};
  const {
    category, picture, price, rating, title, user, slug,
  } = data;
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
  {#if skeleton}

    <figure>
      <Skeleton width="100%" height="100%" style="margin:0 !important" />
    </figure>
    <div class="caption">
      <Skeleton width="90%" height="10px" />
      <Skeleton width="60%" height="10px" />
      <span class="avatar"> <Skeleton width="15px" height="15px" style="display: inline-block;border-radius:100%;margin:0;" /> <Skeleton width="50px" height="8px" style="display:inline-block" /></span>
      <div class="price"><Skeleton width="70%" height="13px" style="margin-top:.6rem" /></div>
      <span class="rating"> <Skeleton width="50%" height="8px" style="margin-top:.6rem" /> </span>
    </div>

  {:else}
    <figure>
      <img class="lazyload" data-src={picture[0]} src="/assets/images/thumbnail.svg" alt={title}>
      <a href="/katalog/categories/{category.slug}" class="category"> {category.title} </a>
    </figure>
    <div class="caption">
      <h3><a href="/katalog/{slug}"> {title} </a></h3>
      <a href="/user/{user.username}" class="avatar"> <img class="lazyload" src="/assets/images/thumbnail.svg" data-src={user.avatar} alt="Avatar"> {user.name}</a>
      <div class="price">Rp{price},-</div>
      <span class="rating"> <Star rate={rating} /> </span>
    </div>
  {/if}
</div>
