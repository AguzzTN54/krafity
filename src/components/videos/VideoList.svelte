<style>
  .video-list {
    margin:0 15px;
  }
  .row {
    display: flex;
    align-items: center;
  }

  .thumbnail {
    width: 90px;
    height: 50px;
    margin-right: 10px;
    position: relative;
  }
  .duration {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: x-small;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
  }
  .caption {
    font-size: smaller;
    padding: 10px;
  }

  .info {
    color: #666;
    padding: 0 10px;
    display: inline-block;
    position: relative;
    font-weight: lighter;
    font-size: .8rem;
    margin-top: -6px;
  }
  .info::before {
    content: '';
    width:3px;
    height:3px;
    border-radius: 100%;
    position: absolute;
    left:0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #888;
  }
  .load-more.primary-shadow {
    background-color: var(--mdc-theme-primary);
    color: #fff;
    padding: 5px 15px;
    margin-top: 15px;
    border-radius: 4px;
    display: inline-block;
  }
</style>


<h2 class="text-center"> Video Lainnya </h2>
<div class="video-list">

  {#each [1, 2, 3, 4] as i (i)}
    <a href="/" class="item row">
      <div class="col thumbnail">
        <img src="/assets/images/bg1-500.webp" alt="Iki bambar">
        <span class="duration">22:12</span>
      </div>
      <div class="col caption">
        <h3 style="margin:0" class="text-overflow"> Saya Bingung mau ngasih nama Apaan hemnn </h3>
        <span class="info"> Martian Man </span>
        <span class="info"> 1 jam</span>
      </div>
    </a>
  {/each}

</div>

<div class="text-center">
  <a href="/tutorial/video" class="load-more primary-shadow"> Lihat Semua video</a>
</div>