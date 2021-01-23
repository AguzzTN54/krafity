<script>
  export let avatar = '/assets/images/bg1-500.webp';
  export let name = 'Anonym';
  export let username = '';
  export let style = '';
</script>

<style>
  .container, .avatar, .save{
    width:100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .avatar > img {
   width: 25px;
   height: 25px; 
   border-radius: 100%;
   overflow: hidden;
   display: inline-block;
   margin-right: 10px;
  }
  .share {
    display: block;
    margin-left: auto;
  }
</style>

<div class="container" style={style}>
  <a class="avatar" href="{username !== '' ? `/user/${username}` : ''}">
    <img class="lazyload" src="/assets/images/thumbnail.svg" data-src={avatar} alt="{name} Avatar">
    <span class="name"> {name} </span>
  </a>
  <div class="save">
    <span class="share"> Share</span>
    <span>oke</span>

  </div>
</div>