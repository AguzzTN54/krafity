<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { Skeleton } from '../utils/index';
  import { windowWidth } from '../../store';

  export let skeleton = '';
  export let picture = ['/assets/images/thumbnail.svg'];

  let picActive = picture[0];
  $: mobile = $windowWidth < 600;
  $: splideSize = $windowWidth < 370 ? $windowWidth : 270;

  const splide = async () => {
    const { default: Splide } = await import('@splidejs/splide');

    new Splide('#preview-pic', {
      perPage: 1,
      perMove: 1,
      height: `${splideSize}px`,
      pagination: false,
      arrows: false,
    }).mount();
  };

  onMount(() => (mobile ? splide() : null));
</script>

<svelte:window on:resize={() => (mobile ? splide() : null)} />

<div class="content-pic">
  {#if skeleton}
    <div class="product-pic">
      <div class="preview">
        <Skeleton width="100%" height="100%" />
      </div>

      {#if !mobile}
        <div class="pic-list">
          <Skeleton width="65px" height="65px" />
          <Skeleton width="65px" height="65px" />
          <Skeleton width="65px" height="65px" />
          <Skeleton width="65px" height="65px" />
          <Skeleton width="65px" height="65px" />
        </div>
      {/if}
    </div>
  {:else if mobile}
    <!-- Mobile -->
    <div class="product-pic" style="width:{splideSize}px; margin: auto">
      <div
        id="preview-pic"
        class="splide"
        style="height: {splideSize}px; overflow: hidden"
      >
        <div class="splide__track">
          <ul class="splide__list">
            {#each picture as pic}
              <li class="splide__slide">
                <div class="item splide__slide__container preview">
                  <img
                    src={pic}
                    alt="preview"
                    transition:fade={{ duration: 500 }}
                  />
                </div>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
    <!-- Mobile -->
  {:else}
    <!-- Tablet / Desktop -->
    <div class="product-pic">
      <div class="preview">
        {#each picture as pic (pic)}
          {#if pic === picActive}
            <img src={pic} alt="preview" transition:fade={{ duration: 500 }} />
          {/if}
        {/each}
      </div>
      <div class="pic-list">
        {#each picture as pic}
          <span
            on:click={() => {
              picActive = pic;
            }}
            class={pic === picture ? 'active' : ''}
          >
            <img src={pic} alt="thumbnail" />
          </span>
        {/each}
      </div>
    </div>
    <!-- Tablet / Desktop -->
  {/if}
</div>

<style>
  .content-pic {
    position: relative;
  }
  .product-pic {
    position: sticky;
    top: 60px;
    width: 350px;
    min-width: 350px;
  }
  .product-pic .preview {
    width: 100%;
    height: 350px;
    border-radius: 13px;
    overflow: hidden;
  }
  .product-pic .pic-list {
    display: flex;
  }
  .product-pic span {
    width: 65px;
    height: 65px;
    margin: 5px;
    cursor: pointer;
  }
  span.active {
    border: 2px solid var(--mdc-theme-primary);
  }

  @media screen and (max-width: 740px) {
    .product-pic {
      width: 200px;
      min-width: 200px;
    }
    .product-pic .preview {
      height: 200px;
    }
    .product-pic span {
      width: 38px;
      height: 38px;
      margin: 2px;
    }
  }

  @media screen and (max-width: 600px) {
    .product-pic {
      width: 100%;
      min-width: unset;
      display: flex;
      justify-content: center;
    }
    .product-pic .preview {
      border-radius: unset;
    }
  }
</style>
