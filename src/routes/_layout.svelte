<script>
  import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
  import { onMount, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { stores } from '@sapper/app';
  import { DenseFixedAdjust } from '@smui/top-app-bar';
  import LinearProgress from '@smui/linear-progress';
  import Appbar from '../components/Appbar.svelte';

  const { preloading } = stores();
  
  let mobile = false;
  const toggleResponsive = () => { mobile = (window.innerWidth < 750); };
  onMount(toggleResponsive);

  const responsive = writable(mobile);
  $: responsive.set(mobile);
  setContext('responsive', responsive);

  export let segment;
  $: console.log(segment);
</script>

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
    transition: all .5s;
  }
  :global(.splide__arrow:hover) {
    opacity: 1;
  }

  :global(.splide__arrow svg) {
    fill: var(--mdc-theme-primary) !important;
    width: 70% !important;
  }
</style>

<svelte:window on:resize={toggleResponsive} />
{#if $preloading}
  <LinearProgress indeterminate class="preloader"/>
{/if}

{#if segment === 'auth'}
  <main>
    <slot />
  </main>

{:else}
  <Appbar {segment}/>
  <main use:DenseFixedAdjust>
    <slot />
  </main>
{/if}