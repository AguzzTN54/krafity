<script>
  import { onMount } from 'svelte';
  import axios from 'axios';
  import { Skeleton } from '../utils/index';

  const splide = async () => {
    const { default: Splide } = await import('@splidejs/splide');
    new Splide('#video-slide', {
      perPage: 1,
      gap: '1.5rem',
      height: '220px',
    }).mount();
  };

  onMount(() => splide());

  const getData = async () => {
    try {
      const { data, status } = await axios.get('/dummy/videos.json');
      splide();
      if (status === 200) return data;
      throw new Error(`Terjadi kesalahan dengan status kode ${status}`);
    } catch (e) {
      console.error(e);
    }
  };

  const videos = getData();
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
    width:calc(100% - 10px);
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
    cursor: pointer;
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

  {#await videos}
    <div class="slide-video">
      <div class="video-item splide__slide__container">
        <div class="slide-picture">
          <Skeleton style="width:100%; height:100%; margin:0px" />
        </div>
      </div>
    </div>
  {:then data}
    <div class="slide-video splide" id="video-slide">
      <div class="splide__track">
        <ul class="splide__list">

          {#each data as { id, title, user } (id)}
            <li class="splide__slide">
              <div class="video-item splide__slide__container">
                <div class="slide-picture">
                  <img class="lazyload" src="/assets/images/thumbnail.svg" data-src="https://i.ytimg.com/vi_webp/{id}/hqdefault.webp" alt={title} />
                  <span class="video-play"> <i class="material-icons">play_arrow</i></span>
                  <div class="video-caption">
                    <a href="https://www.youtube.com/watch?v={id}" target="_blank" class="video-title text-overflow">
                      <h3>{title}</h3>
                    </a>
                    <span class="category">{user.name}</span>
                    <span class="category"> Youtube </span>
                  </div>
                </div>
              </div>
            </li>
          {/each}

        </ul>
      </div>
    </div>

  {/await}
</div>