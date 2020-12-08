<script>
  import { onMount } from 'svelte';

  onMount(async () => {
    const { default: Splide } = await import('@splidejs/splide');
    new Splide('#splide', {
      perPage: 4,
      gap: '1.5rem',
      arrows: false,
      pagination: false,
      breakpoints: {
        1000: { perPage: 3, gap: '1rem' },
        780: { perPage: 2, gap: '1rem' },
        550: { perPage: 1, gap: '1rem' },
      },
    }).mount();
  });
</script>

<style>
  #splide {
    background-color: #f1f1f1;
    padding:10px;
    cursor: grab;
  }
  .post-item {
    display: flex;
    width:100%;
    justify-content: center;
    align-items: flex-start;
    background-color: #fff;
    /* border: 1px solid #ccc; */
    border-radius: 7px;
    overflow: hidden;
  }
  .post-item img {
    width: 100%;
    height:100%;
    object-fit: cover;
  }
  .slide-picture {
    flex-basis: 35%;
    margin-right:5px;
  }
  .post-caption {
    flex-basis: 65%;
    margin: 10px;
  }
  .post-title {
    font-weight: bold;
    text-transform: capitalize;
    font-weight: 1.05em;
    line-height: 1rem;
  }

  .category {
    color: #666;
    padding: 0 10px;
    display: inline-block;
    position: relative;
    font-weight: lighter;
    font-size: .8rem;
  }
  .category::before {
    content: '';
    width:3px;
    height:3px;
    border-radius: 100%;
    position: absolute;
    left:0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #888;
  }
</style>

<div class="post-list splide" id="splide">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <div class="post-item splide__slide__container">
          <div class="slide-picture">
            <img src="/assets/images/pic1.png" alt="Item 1" />
          </div>
          <div class="post-caption">
            <a href="/katalog/ini-produk" class="post-title text-overflow">Ini Nama Produk nya bosqueh bagus sekali bapaqe</a>
            <a href="/tutorial/categories/" class="category">barang bekas</a>
            <span class="category">1jam</span>
          </div>
        </div>
      </li>

      <li class="splide__slide">
        <div class="post-item splide__slide__container">
          <div class="slide-picture">
            <img src="/assets/images/pic1.png" alt="Item 1" />
          </div>
          <div class="post-caption">
            <span class="post-title">Ini Nama Produk nya bosqueh</span>
            <span class="category">barang bekas</span>
          </div>
        </div>
      </li>

      <li class="splide__slide">
        <div class="post-item splide__slide__container">
          <div class="slide-picture">
            <img src="/assets/images/pic1.png" alt="Item 1" />
          </div>
          <div class="post-caption">
            <span class="post-title">Ini Nama Produk nya bosqueh</span>
            <span class="category">barang bekas</span>
          </div>
        </div>
      </li>
    </ul>

  </div>
</div>