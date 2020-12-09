<style>
  .under {
    width: 100%;
    height: calc(100vh - 50px);
    background-color: #707aff;
    position: relative;
    overflow: hidden;
  }
  figure {
    max-width: 1000px;
    width: 100%;
    max-height: 400px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .page-title {
    margin: auto;
    max-width: 700px;
    width: 100%;
    color: #fff;
    padding: 15px;
  }
  h1 {
    font-weight: bold;
  }

  a {
    display: inline-block;
    font-size: .9rem;
    margin-top: 30px;
    padding: 10px 20px;
    border-radius: 2px;
    color: #fff;
    background-color: var(--mdc-theme-primary);
  }

  @media screen and (max-width: 750px) {
    img {
      margin-top: unset;
    }
    .page-title {
      position: static;
      transform: unset;
    }
  }
</style>

<svelte:head>
  <title>Dalam Perbaikan - Krafity</title>
</svelte:head>

<div class="under">
  <figure>
    <img src="/assets/images/under-construction.webp" alt="Under Constructtion">
  </figure>

  <div class="page-title text-center">
    <h1>UNDER CONSTRUCTION</h1>
    <h2> Kami Sedang Memperbaiki Ini. </h2>
    <a href="/" rel="prefetch"> Kembali Ke Home</a>
  </div>

</div>