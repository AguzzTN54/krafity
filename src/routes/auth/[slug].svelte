<script context="module">
  export const preload = async ({ params }) => {
    const { slug } = params;
    return ({ slug: slug.toLowerCase() });
  };
</script>

<script>
  import { goto } from '@sapper/app';
  import { onMount } from 'svelte';
  import Register from '../../components/auth/Register.svelte';
  import Login from '../../components/auth/Login.svelte';

  export let slug;
  onMount(() => {
    console.log(slug);
    if (!(slug === 'login' || slug === 'register')) goto('/');
  });
</script>

<style>
  .brand img {
    width: 120px;
    height: auto;
  }

  .auth-page {
    width:100vw;
    height:100vh;
    background-image: url(assets/images/bg1-500.webp);
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    position:relative;
  }

  .auth-page > .auth-form-field {
    max-width:600px;
    width:100%;
    height:100%;
    overflow-y: auto;
    position:relative;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    border: 1px solid #eee;
    background-color: white;
    box-shadow: 0 0 30px -25px rgba(0,0,0,0.5);
  }
  .auth-form-field::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 640px) {
    .auth-page >.auth-form-field {
      box-shadow: none;
      background-color: transparent;
      border:none;
    }
  }

  :global(.form-disabled) {
    opacity: 0.5;
  }
  :global(.form-disabled::after) {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height:100%;
    top: 0;
    left: 0;
  }

  .brand {
    display:block;
    width: 100%;
    text-align: center;
    margin-top:20px;
  }

  :global(.auth-form-field > form) {
    border-radius: 13px;
    padding: 30px;
    width:100%;
    max-width: 400px;
    text-align: center;
  }

  .mask1, .mask2 {
    width:100%;
    height:100%;
    position: absolute;
    top:0;
    left:0;
  }
  .mask2{
    background-color: rgba(255,255,255,0.6);
    backdrop-filter: blur(30px);
  }

  .mask1 {
    content:'';
    display:block;
    clip-path: polygon(65% 3%, 100% 0, 95% 49%, 100% 73%, 100% 96%, 51% 100%, 0 100%, 0 15%, 14% 1%);
    background-color: #fff;
    opacity: 0.95;
    transform: rotate(180deg);
  }

  @media screen and (max-width:480px) {
    :global(.auth-form-field > form) {
      margin:0;
    }
    .mask1 {
      opacity:1;
    }
  }
</style>

<section class="auth-page">
  <div class="mask1" /><div class="mask2" />
  <div class="auth-form-field">
    <h1 class="brand"><a href="/" rel="prefetch">
      <img src="/assets/logo/krafity-logo.svg" alt="Krafity Logo">
    </a></h1>

    {#if slug === 'register'}
      <Register />
    {:else if slug === 'login'}
      <Login />
    {:else}
      <div>Mengalihkan ...</div>
    {/if}

  </div>
</section>