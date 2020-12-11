<script>
  import { Skeleton } from '../utils/index';

  export let skeleton;
  export let data = {};
  const {
    title, slug, user, thumbnail, content, views,
  } = data;
</script>

<style>
  .main-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
    padding: 10px;
    margin: 10px 0;
  }

  figure {
    width: 120px;
    height:120px;
    margin: 0;
  }

  .caption {
    flex-basis: calc(100% - 120px);
    flex-grow: 1;
  }

  h3 {
    font-size: large;
    font-weight: bold;
  }

  .user a, .link {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .user img, :global(.avatar) {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    border-radius: 100%;
    overflow: hidden;
  }

  .info {
    color: #666;
    padding: 0 10px;
    display: inline-block;
    position: relative;
    font-weight: lighter;
    font-size: .8rem;
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
  p {
    margin-bottom: -3px;
    margin-top: -2px;
    margin-right: 5px;
  }
</style>

{#if skeleton}
  <div class="main-item">
    <figure>
      <Skeleton width="100%" height="100%" />
    </figure>
    <div class="caption">
      <div class="user">
        <span class="link">
          <Skeleton className="avatar"/>
          <Skeleton width="70px" height="12px"/>
        </span>
      </div>

      <Skeleton width="180px" height="18px"/>
      <p class="short-desc text-overflow">
        <Skeleton width="80%" height="8px"/>
        <Skeleton width="45%" height="8px"/>
      </p>
      <span class="info"><Skeleton width="50px" height="10px"/></span>
      <span class="info"><Skeleton width="50px" height="10px"/></span>
    </div>
  </div>

{:else}
  <div class="main-item">
    <figure>
      <img class="lazyload" src="/assets/images/thumbnail.svg" data-src={thumbnail} alt={title}>
    </figure>
    <div class="caption">
      <div class="user">
        <a href="/user/{user.username}">
          <img class="lazyload" src="/assets/images/thumbnail.svg" data-src={user.avatar} alt="Avatar">
          <span>{user.name}</span>
        </a>
      </div>

      <h3 class="text-overflow"><a href="/tutorial/{slug}" rel="prefetch">{title}</a></h3>
      <p class="short-desc text-overflow">
        {content.replace(/(<([^>]+)>)/ig, '').substring(0, 200)}
      </p>
      <span class="info">{views} Views</span>
      <span class="info">1.5 jam</span>
    </div>
  </div>
{/if}