<script>
  import axios from 'axios';
  import { Skeleton } from '../utils/index';

  const getData = async () => {
    try {
      const { data, status } = await axios.get('/dummy/videos.json');
      if (status === 200) return data;
      throw new Error(`Terjadi kesalahan dengan status code ${status} saat melakukan fetch`);
    } catch (e) {
      console.error(e);
    }
  };

  const videos = getData();
</script>

<style>
  .video-list {
    margin:0 15px;
  }
  .row {
    display: flex;
    align-items: center;
  }

  .thumbnail {
    min-width: 90px;
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

  {#await videos}
    {#each [1, 2, 3, 4] as i (i)}
      <div class="item row">
        <div class="col thumbnail">
          <Skeleton width="100%" height="100%" style="margin:0" />
        </div>
        <div class="col caption" style="width:100%">
          <Skeleton width="90%" height="13px" />
          <span class="info"> <Skeleton width="70px" height="8px" style="display: inline-block" /> </span>
          <span class="info"> <Skeleton width="70px" height="8px" style="display: inline-block" /> </span>
        </div>
      </div>
    {/each}
  {:then data}
  
    {#each data as { id, title, user, duration } (id)}
      <a href="https://www.youtube.com/watch?v={id}" target="_blank" class="item row">
        <div class="col thumbnail">
          <img src="/assets/images/thumbnail.svg" data-src="https://i.ytimg.com/vi_webp/{id}/mqdefault.webp" class="lazyload" alt={title}>
          <span class="duration">{duration}</span>
        </div>
        <div class="col caption">
          <h3 style="margin:0" class="text-overflow"> {title} </h3>
          <span class="info"> {user.name} </span>
          <span class="info"> Youtube </span>
        </div>
      </a>
    {/each}
  {/await}

</div>

<!-- <div class="text-center">
  <a href="/tutorial/video" class="load-more primary-shadow"> Lihat Semua video</a>
</div> -->