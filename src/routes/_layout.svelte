<script>
  import '../theme/style.scss';
  import 'lazysizes';
  import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
  import { onMount } from 'svelte';
  import { stores } from '@sapper/app';
  import { DenseFixedAdjust } from '@smui/top-app-bar';
  import LinearProgress from '@smui/linear-progress';
  import Appbar from '../components/Appbar.svelte';
  import { mobile, windowWidth } from '../store';

  const { preloading } = stores();

  const toggleResponsive = () => {
    windowWidth.set(window.innerWidth);
    mobile.set(window.innerWidth < 750);
  };

  const removeLoader = (loader, t) => {
    clearTimeout(t);
    loader.remove();
  };

  onMount(() => {
    const loader = document.querySelector('.loader');
    loader.style.opacity = 0;
    const t = setTimeout(() => removeLoader(loader, t));
    toggleResponsive();
  });

  export let segment;
  $: console.log(segment);
</script>

<svelte:window on:resize={toggleResponsive} />
{#if $preloading}
  <LinearProgress indeterminate class="preloader" />
{/if}

{#if segment === 'auth'}
  <main>
    <slot />
  </main>
{:else}
  <Appbar {segment} />
  <main use:DenseFixedAdjust>
    <slot />
  </main>
{/if}

<style>
  :global(.splide__pagination) {
    bottom: 0;
  }
  :global(.splide__pagination button.is-active) {
    background-color: var(--mdc-theme-primary);
  }
  :global(.splide__arrow) {
    background-color: #fff;
    border-radius: 100%;
    height: 35px;
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
    transition: all 0.5s;
  }
  :global(.splide__arrow:hover) {
    opacity: 1;
  }

  :global(.splide__arrow svg) {
    fill: var(--mdc-theme-primary) !important;
    width: 70% !important;
  }
</style>
