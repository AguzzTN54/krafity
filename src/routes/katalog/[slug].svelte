<script context="module">
  export async function preload({ params }) {
    const { slug } = params;
    const res = await this.fetch(`/dummy/katalog/${slug}.json`);
    if (res.status === 200) return { product: res };
    this.error(res.status, res.message);
  }
</script>

<script>
  import { formatNumber } from '../../functions/formatPrice';
  import MetaTags from '../../components/MetaTags.svelte';
  import { CheckoutForm, PicSlider } from '../../components/catalogue/index';
  import { BreadCrumbs, Star, Skeleton } from '../../components/utils/index';
  import Footer from '../../components/Footer.svelte';
  import { windowWidth } from '../../store';

  export let product;

  $: mobile = $windowWidth < 600;

  let judul = 'Katalog Product';
  let kategori = '';

  $: breadcrumbs = [
    {
      title: 'Katalog',
      link: '/katalog',
    },
    {
      title: kategori.title,
      link: `/katalog?category=${kategori.slug}`,
    },
    {
      title: judul,
    },
  ];

  const getProduct = async () => {
    const data = await product.json();
    const { title, category } = data;
    judul = `Jual ${title}`;
    kategori = category;
    return data;
  };
</script>

<svelte:head>
  <title>{judul}</title>
  <MetaTags title={judul} />
</svelte:head>

{#if !mobile}
  <BreadCrumbs list={breadcrumbs} />
{/if}

<section>
  <div class="content">
    {#await getProduct()}
      <div class="product" style="width:100%;">
        <PicSlider skeleton />
        <div class="details">
          <Skeleton height="20px" width="80%" />
          <Skeleton height="20px" width="50%" />
          <div class="short-info">
            <Skeleton
              height="10px"
              width="60px"
              style="display: inline-block"
            />
            <Skeleton
              height="10px"
              width="60px"
              style="display: inline-block"
            />
            <div class="price">
              <Skeleton height="20px" width="100px" />
            </div>
          </div>

          <div class="description">
            <Skeleton
              height="10px"
              width="50px"
              style="display: inline-block;"
            />
            <Skeleton
              height="10px"
              width="50px"
              style="display: inline-block;"
            />
            <br />
            <Skeleton
              height="10px"
              width="50px"
              style="display: inline-block;"
            />
            <Skeleton
              height="10px"
              width="50px"
              style="display: inline-block;"
            />

            <Skeleton height="10px" width="100%" style="margin-top: 10px" />
            <Skeleton height="10px" width="100%" />
            <Skeleton height="10px" width="100%" />
            <Skeleton height="10px" width="60%" />
          </div>

          <div class="user" style="margin-top: 20px">
            <figure>
              <Skeleton width="100%" height="100%" />
            </figure>
            <div class="user-info">
              <Skeleton height="15px" width="100px" style="margin:0" />
              <Skeleton
                height="10px"
                width="50px"
                style="display: inline-block;"
              />
              <Skeleton
                height="10px"
                width="50px"
                style="display: inline-block;"
              />
            </div>
            <div class="galery-btn">
              <Skeleton height="30px" width="100%" style="display: block;" />
            </div>
          </div>
        </div>
      </div>

      <CheckoutForm skeleton />
    {:then { title, category, rating, price, description, picture, user }}
      <div class="product">
        <PicSlider {picture} />
        <div class="details">
          {#if !mobile}
            <h1>{title}</h1>
          {/if}
          <div class="short-info">
            <div>
              <span><Star rate={rating} />
              </span>
              <span> <b>{rating}</b> (100 Ulasan)</span>
            </div>
            {#if mobile}
              <h1>{title}</h1>
            {/if}
            <div class="price">Rp{formatNumber(price)},-</div>
          </div>

          <div class="info-produk">
            <div class="description">
              <span class="info">Berat : <strong>5kg</strong></span>
              <span class="info">
                Kategori :
                <strong>
                  <a href="/katalog?category={category.slug}">
                    {category.title}
                  </a>
                </strong>
              </span>

              <p>
                {@html description}
              </p>
            </div>

            <div class="user">
              <figure><img src={picture[0]} alt={user.name} /></figure>
              <div class="user-info">
                <h3>{user.name}</h3>
                <span class="status"> Pengrajin</span>
                <span>{user.city}</span>
              </div>
              <div class="galery-btn"><button>Galeri</button></div>
            </div>
          </div>
        </div>
      </div>

      <CheckoutForm {price} />
    {/await}
  </div>
</section>

<div style="margin-top: 70px" />
<div class="futer">
  <Footer />
</div>

<style>
  .futer {
    display: block;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
  }

  section {
    margin: 20px 0;
    display: block;
    padding: 0 5%;
  }

  .content {
    display: flex;
  }

  .product {
    display: flex;
    width: 100%;
  }

  /* Details */
  .details {
    padding: 0 20px;
    width: 100%;
  }
  h1 {
    font-weight: 800;
    font-family: 'Nunito Sans', 'Open Sans', Tahoma, sans-serif;
    font-size: 1.2rem;
    margin: 0;
  }

  .short-info {
    font-size: 0.75rem;
    margin: 5px;
    border-bottom: 2px solid #eee;
  }
  :global(.short-info .star-rating) {
    display: inline-block;
    margin-right: 10px;
  }
  .price {
    font-size: 1.6rem;
    font-weight: bold;
    font-family: 'Nunito Sans', 'Open Sans', Tahoma, sans-serif;
    padding: 5px 0;
  }
  .info {
    display: block;
  }
  .info a {
    font-weight: bold;
    color: var(--mdc-theme-primary);
  }

  .description {
    font-size: 0.95rem;
  }

  .user {
    border-top: 3px solid #eee;
    border-bottom: 3px solid #eee;
    padding: 20px;
    display: flex;
    align-items: center;
  }
  .user figure {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    overflow: hidden;
    margin: 0;
  }
  .user-info {
    padding-left: 20px;
  }
  .user-info h3 {
    font-size: 0.95rem;
    font-family: 'Nunito Sans', 'Open Sans', Tahoma, sans-serif;
    font-weight: bold;
    margin: 0;
  }
  .user-info span {
    font-size: 0.85rem;
  }
  .user-info span::before {
    content: '\2022';
    font-size: 1.2rem;
    margin: 0 5px;
    display: inline-block;
  }

  .galery-btn {
    margin-left: auto;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .galery-btn button {
    background-color: #fff;
    outline: 0;
    border: 2px solid var(--mdc-theme-primary);
    border-radius: 4px;
    padding: 10px;
    color: var(--mdc-theme-primary);
    display: block;
    width: calc(100% - 10px);
    margin: 5px;
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    section {
      margin-top: 0;
      padding-left: 0;
      padding-right: 0;
    }
    .product {
      flex-direction: column;
    }

    .short-info {
      display: flex;
      flex-direction: column-reverse;
      padding-bottom: 10px;
    }
    .price {
      font-size: 1.3rem;
    }
    h1 {
      font-weight: normal;
      font-size: 0.9rem;
    }

    .info-produk {
      display: flex;
      flex-direction: column-reverse;
    }
    .user {
      padding: 5px 0;
      margin: 5px 0 10px;
      border-top: 0;
    }
    .user-info {
      padding-left: 5px;
    }
    .user-info span {
      font-size: 0.7rem;
    }
    .user figure {
      width: 40px;
      height: 40px;
    }
    .galery-btn {
      font-size: 0.75rem;
      width: 70px;
    }
    .description {
      font-size: unset;
    }
  }
</style>
