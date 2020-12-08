<script>
  export let title = 'Title';
</script>

<style>
  .banner {
    width: 100%;
    height: 200px;
    padding: 5%;
    position: relative;
    overflow: hidden;
    background-color: #fab6db;
  }
  .banner img {
    position: absolute;
    bottom:-50px;
    right:5%;
    height:unset;
    width: 300px;
    max-width:40%;
  }

  .banner-caption {
    display: inline-block;
    padding: .5em 1.5em;
    background-color: #ffffff;
    color: #333;
    border-radius: 2em;
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    font-weight: bold;
    box-shadow: -4px 5px 8px -5px rgba(0,0,0,0.5);
    z-index: +1;
  }

  @media screen and (max-width: 600px) {
    .banner {
      height: 150px;
    }
    .banner img {
      bottom: -10px;
    }
    .banner-caption {
      font-size: 1.2rem;
    }
  }
</style>

<div class="banner">
  <div class="banner-container">
    <img src="/images/3D-uv-05.jpg" alt="banner-{title}">
    <h1 class="banner-caption"> {title} </h1>
  </div>
</div>