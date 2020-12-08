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

  .user a{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .user img {
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

  .load-more {
    color: var(--mdc-theme-primary);
    border: 1px solid var(--mdc-theme-primary);
    border-radius: 5px;
    padding: 10px 15px;
    margin: 15px 20px;
    display: inline-block
  }

  .load-more:hover {
    color: #fff;
    background-color: var(--mdc-theme-primary);
  }
</style>

<div class="main-post-list">
  <h2> Tutorial </h2>
  <div class="main-list">

    {#each [0, 2, 1, 3, 4, 5] as i (i)}
      <div class="main-item">
        <figure>
          <img src="/assets/images/bg1-500.webp" alt="iki gambar">
        </figure>
        <div class="caption">
          <div class="user">
            <a href="/user/siapa-ya">
              <img src="/assets/images/bg1-500.webp" alt="Avatar">
              <span>Damina Arts</span>
            </a>
          </div>

          <h3 class="text-overflow"><a href="/tutorial/uhuk-uhuk" rel="prefetch">Ini judul post nya ya bapaq :D saya idak tahu apa apa</a></h3>
          <p class="short-desc text-overflow">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident tempore doloribus in eaque qui aut tenetur et asperiores nesciunt enim!
          </p>
          <span class="info">66 Comments</span>
          <span class="info">1.5 jam</span>
        </div>
      </div>
    {/each}

  </div>

  <div class="text-center">
    <a href="/" class="load-more"> Lihat Semua </a>
  </div>
</div>