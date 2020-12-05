<script>
  import { onMount } from 'svelte';

  onMount(async () => {
    const { default: Splide } = await import('@splidejs/splide');
    const { default: URLHash } = await import('@splidejs/splide-extension-url-hash');

    new Splide('#featured-pengrajin', {
      perPage: 5,
      gap: '1rem',
      perMove: 1,
      trimSpace: false,
      height: '70px',
      autoplay: true,
      pagination: false,
      rewind: true,
      lazyLoad: 'sequential',
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
  .pengrajin {
    padding:25px 5% 15px;
  }
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slide-picture {
    width: 50px;
    height:50px !important;
    border-radius:100%;
    margin: 5px;
    overflow: hidden;
  }
  .loadmore {
    display: inline-block;
    color: var(--mdc-theme-primary);
    font-size: .75em !important;
    margin-left: 30px;
  }
</style>

<div class="pengrajin">
  <h2>Pengrajin <a href="/pengrajin" class="loadmore"> Lihat Semua </a></h2>

  <div class="item-list splide" id="featured-pengrajin">
    <div class="splide__track">
      <ul class="splide__list">

        {#each [0, 1, 2, 3, 4, 5] as i (i)}
          <li class="splide__slide">
            <div class="item splide__slide__container">
              <div class="slide-picture">
                <img src="/images/pic2.jpg" alt="Item 1" />
              </div>
              <div class="item-caption">
                <a href="/" class="item-title">Darwin Arts</a>
              </div>
            </div>
          </li>
        {/each}

      </ul>
    </div>
  </div>
</div>