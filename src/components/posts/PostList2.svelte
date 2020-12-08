<script>
  import { onMount } from 'svelte';

  onMount(async () => {
    const { default: Splide } = await import('@splidejs/splide');
    const { default: URLHash } = await import('@splidejs/splide-extension-url-hash');

    new Splide('#trending-post', {
      perPage: 5,
      gap: '1rem',
      perMove: 1,
      trimSpace: false,
      height: '338px',
      padding: {
        right: '5rem',
        left: '5rem',
      },
      breakpoints: {
        1125: { perPage: 4 },
        900: { perPage: 3 },
        750: { perPage: 2 },
        500: { perPage: 1 },
      },
    }).mount({ URLHash });
  });
</script>

<style>
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    display: block;
    text-align: center;
    padding: 10px;
    margin-top: 5px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }

  .slide-picture {
    height:300px;
    position: relative;
  }
  .post-list {
    overflow-x: hidden;
  }
  .post-caption {
    display: block;
    position: absolute;
    left:50%;
    transform: translateX(-50%);
    bottom: 10px;
    width:90%;
    background-color: #fff;
    border-radius: 10px;
    padding:15px;
    box-shadow: 0 33px 15px -10px rgb(41 21 24 / 30%), 0 35px 20px 5px rgba(56, 26, 31, 0.05);
  }
  .post-title {
    font-weight: bold;
    text-transform: capitalize;
    font-weight: 1.05em;
    line-height: 1rem;
  }

  .splide__track {
    overflow: initial !important;
  }
</style>

<h1>Trendings</h1>
<div class="post-list splide" id="trending-post">
  <div class="splide__track">
    <ul class="splide__list">

      {#each [1, 2, 3, 4, 5] as i (i)}
        <li class="splide__slide">
          <div class="post-item splide__slide__container">
            <div class="slide-picture">
              <img src="/assets/images/pic2.jpg" alt="Item 1" />
              <div class="post-caption">
                <a href="/" class="text-overflow post-title">Ini Nama Produk nya bosqueh bagus sekali bapaqe</a>
                <a href="/tutoral/categories/" class="category">barang bekas</a>
                <span class="category">1jam</span>
              </div>
            </div>
          </div>
        </li>
      {/each}
      
    </ul>
  </div>
</div>