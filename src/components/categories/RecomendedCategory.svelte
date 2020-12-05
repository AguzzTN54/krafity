<style>
  /* .recomended {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 0 15px;
    border-radius: 10px;
  } */

  h2 {
    font-size: 1.3rem;
    text-align: center;
  }
  
  .list {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }

  .item {
    width:110px;
    height:110px;
    overflow: hidden;
    border-radius: 10px;
    position: relative;
    color: #fff;
    margin: 5px;
  }
  .item::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0));
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .caption {
    display: block;
    position: absolute;
    bottom:0;
    left:0;
    color: #fff;
    z-index: +1;
    font-size: .7rem;
    padding: 5px 10px;
  }
</style>

<div class="recomended">
  <h2> Kategori Pilihan </h2>

  <div class="list">
    <a href="/"> 
      <div class="item">
        <img src="/images/pic2.jpg" alt="pick" />
        <div class="caption">
          <h3> Souvenir</h3>
        </div>
      </div>
    </a>

    <a href="/"> 
      <div class="item">
        <img src="/images/pic2.jpg" alt="pick" />
        <div class="caption">
          <h3> Souvenir</h3>
        </div>
      </div>
    </a>

    <a href="/"> 
      <div class="item">
        <img src="/images/pic2.jpg" alt="pick" />
        <div class="caption">
          <h3> Souvenir</h3>
        </div>
      </div>
    </a>

    <a href="/"> 
      <div class="item">
        <img src="/images/pic3.jpg" alt="pick" />
        <div class="caption">
          <h3> Souvenir</h3>
        </div>
      </div>
    </a>

  </div>
</div>