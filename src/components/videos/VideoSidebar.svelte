<script>
  import { onMount } from 'svelte';

  onMount(async () => {
    const { default: Splide } = await import('@splidejs/splide');
    new Splide('#video-slide', {
      perPage: 1,
      gap: '1.5rem',
      height: '220px',
    }).mount();
  });
</script>

<style>
  .slide-video {
    max-width: 350px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    overflow-x: hidden;
  }
  .slide-picture {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    height:200px;
  }
  .slide-picture::after {
    content: '';
    display: block;
    position: absolute;
    bottom:0;
    left: 0;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
  }

  .video-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 5px;
    z-index: +1;
    background-color: #fff;
    padding: 15px;
    border-radius: 8px;
    font-size: smaller;
    transition: all 1s;
  }

  .splide__track {
    overflow: initial !important;
  }
  .video-title {
    -webkit-line-clamp: 1;
  }
  .video-play {
    position: absolute;
    top: -100%;
    left: 50%;
    transform: translate(-50%);
    width: 35px;
    height: 35px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--mdc-theme-primary);
    background-color: #fff;
    transition: all .5s;
    opacity: 0.5;
  }

  .video-play:hover {
    opacity: 1;
    top: 50%;
  }

  img:hover ~ .video-play {
    top: 50%;
  }

  img:hover ~ .video-caption, .video-play:hover ~ .video-caption {
    bottom: -100%;
  }
</style>

<h2 class="text-center">Video tutorial</h2>
<div class="video-slider">
  <div class="slide-video splide" id="video-slide">
    <div class="splide__track">
      <ul class="splide__list">

        {#each [0, 1, 2, 3, 4, 9] as i (i)}
          <li class="splide__slide">
            <div class="video-item splide__slide__container">
              <div class="slide-picture">
                <img src="/assets/images/pic1.png" alt="Item 1" />
                <a href="/" class="video-play"> <i class="material-icons">play_arrow</i></a>
                <div class="video-caption">
                  <a href="/" class="video-title text-overflow">
                    <h3>Ini Nama Produk nya bosqueh bagus sekali bapaqe</h3>
                  </a>
                  <a href="/tutorial/categories" class="category">Darwin Media</a>
                  <a href="/tutorial/categories" class="category">barang bekas</a>
                </div>
              </div>
            </div>
          </li>
        {/each}

      </ul>
    </div>
  </div>
</div>