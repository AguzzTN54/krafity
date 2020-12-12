<script>
  import { Skeleton } from '../utils/index';

  export let skeleton;
  export let data = {
    username: '',
    name: 'Anonym',
    avatar: '/assets/images/thumbnail.svg',
    city: 'Unknown',
    stuff: ['Stuff1', 'stuff2'],
  };

  const {
    city, username, name, avatar, stuff,
  } = data;

  const stuffs = stuff.filter((v, i) => i < 6);
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
    height:150px;
    margin:0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure > img, :global(figure >div) {
    width:120px;
    height: 120px;
    border-radius: 100% !important;
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

  .caption {
    padding: 5px 10px;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 8px 0;
    line-height: 1rem;
    text-align: center;
  }
  .location, .material-icons {
    font-size: 1rem;
  }

  .stuff {
    margin-top: 10px;
  }
  :global(.stuff > div) {
    display: inline-block;
    margin: 1px;
  }
  span {
    padding: 3px 7px;
    margin: 2px;
    border-radius: 20px;
    display: inline-block;
    border: 1px solid #ccc;
    font-size: .7rem;
  }
</style>

<div class="item">

  {#if skeleton}
    <figure>
      <Skeleton />
    </figure>
    <div class="caption">
      <Skeleton height="13px" width="90%" />
      <div class="location text-center">
        <Skeleton width="70px" height="11px" />
      </div>
      <div class="stuff text-center">
        <Skeleton width="50px" height="9px" />
        <Skeleton width="50px" height="9px" />
        <Skeleton width="50px" height="9px" />
        <Skeleton width="9px" height="9px" />
        <Skeleton width="50px" height="9px" />
      </div>
    </div>

  {:else}
    <figure>
      <img src="/assets/images/thumbnail.svg" data-src={avatar} alt={name} class="lazyload">
    </figure>
    <div class="caption">
      <h3><a href="/user/{username}"> {name}</a></h3>
      <div class="location text-center">
        <i class="material-icons">location_on</i> {city}
      </div>
      <div class="stuff text-center">
        {#each stuffs as stuffName}
          <span>{stuffName}</span>
        {/each}
      </div>
    </div>
  {/if}
</div>