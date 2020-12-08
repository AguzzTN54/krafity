<script>
  export let rate = 0;
  const persenRate = (rate / 5) * 100;
</script>

<style>
  .star-rating {
    white-space: nowrap;
    position: relative;
    background-color: #fff;
    width: min-content;
  }

  i {
    font-size: .9rem !important;
    margin-right:-3px;
  }
  
  i:last-child {
    margin-right:unset;
  }

  .star {
    letter-spacing: -2px;
    margin: -2px;
    padding: 0;
  }
  .blend {
    mix-blend-mode: lighten;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 90%;
  }

  .yellow {
    position: inherit;
    top: inherit;
    left: inherit;
    width: 0%;
    height: 100%;
    background-color: #fccc2c;
  }

  .gray {
    position: inherit;
    top: inherit;
    left: inherit;
    background-color: #ccc;
    width: 100%;
    height: 100%;
  }
</style>

<div class="star-rating">
  <span class="star">
    <i class="material-icons">star</i>
    <i class="material-icons">star</i>
    <i class="material-icons">star</i>
    <i class="material-icons">star</i>
    <i class="material-icons">star</i>
  </span>
  <div class="blend">
    <div class="gray"></div>
    <div class="yellow" style="width:{persenRate}%"></div>
  </div>
</div>