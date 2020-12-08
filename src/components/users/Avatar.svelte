<script>
  export let picture = '/assets/images/bg1-500.webp';
  export let name = 'Anonym';
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
  <div class="avatar">
    <img src={picture} alt="{name} Avatar">
    <span class="name"> {name} </span>
  </div>
  <div class="save">
    <span class="share"> Share</span>
    <span>oke</span>

  </div>
</div>