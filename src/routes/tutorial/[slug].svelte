<script context="module">	
	export async function preload({ params }) {
	  const { slug } = params;
	  const res = await this.fetch(`/dummy/tutorials/${slug}.json`);
	  const data = await res.json();
	  if (res.status === 200) return { post: data };
	  this.error(res.status, res.message);
	}
</script>

<script>
	import { stores } from '@sapper/app';
	import axios from 'axios';
	import Footer from '../../components/Footer.svelte';
	import { Avatar } from '../../components/users/index';
	import { ProductLandscape } from '../../components/catalogue/index';

	export let post;
	const {
	  id, title, category, user, content, estimasi, thumbnail,
	} = post;
	const metaDescription = content.replace(/(<([^>]+)>)/ig, '').substring(0, 200);

	const { page } = stores();
	const { host, path } = $page;

	const getData = async () => {
	  try {
	    const dataReturn = [];
	    const arData = [];
	    const { data, status } = await axios.get('/dummy/katalog.json');
	    for (let i = 0; i < 4; i++) {
	      const rand = Math.floor(Math.random() * (data.length - 1) + 1);
	      // eslint-disable-next-line no-continue
	      if (arData.includes(rand)) continue;
	      arData.push(rand);
	      dataReturn.push(data[rand]);
	    }
	    if (status) return dataReturn;
	    throw new Error(`Terjadi kesalahan dengan status kode ${status}`);
	  } catch (e) {
	    console.error(e);
	  }
	};
</script>

<style>
	.content {
		width: 700px;
		max-width: 90%;
		margin: 1rem auto;
	}

	.top-info {
		display: inline-block;
		margin-top: 15px;
		font-size: .9rem;
		vertical-align: middle;
	}
	a.top-info {
		margin-right: 20px;
	}
	.material-icons {
		font-size: .9rem;
	}
	a {
		color: var(--mdc-theme-primary);
	}

	h1 {
		margin-top: 15px;
		font-size: 2em;
		font-weight: bold;
	}

	.content-body {
		font-size: large;
		margin-top: 2rem
		
	}

	:global(.content-body img) {
		margin-top: 2rem;
	}

	:global(.content-body img:first()) {
		margin-top: unset;
	}

	:global(.content-body p) {
		margin-top:2rem;
		line-height: 1.8em;
	}

	:global(.content-body h2, .content-body h3) {
		font-weight: bold;
		/* margin-top: 3rem; */
	}

	.shop-list {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.item {
		width: 320px;
		max-width: 100%;
		margin: 10px auto;
	}

	@media screen and (max-width:500px) {
		.top-info {
			margin-top: 10px;
		}
		.content-body {
			font-size: 1rem;
		}
		.item {
			flex-basis: 100%;
		}
		/* h2, h3 {
			margin-top: 2rem;
		} */
	}
	
</style>

<svelte:head>
	<title>{title}</title>
	<meta name="title" content={title}/>
	<meta name="description" content={metaDescription}/>
	
	<link rel="fluid-icon" href={thumbnail} title={title}/>
	<meta property="og:type" content="website"/>
	<meta property="og:url" content="http://{host}{path}"/>
	<meta property="og:title" content={title}/>
	<meta property="og:description" content={metaDescription}/>
	<meta property="og:image" content={thumbnail}/>

	<meta property="twitter:card" content="summary_large_image"/>
	<meta property="twitter:url" content="http://{host}{path}"/>
	<meta property="twitter:title" content={title}/>
	<meta property="twitter:description" content={metaDescription}/>
	<meta property="twitter:image" content={thumbnail}/>
</svelte:head>

{#if id}
	<section class="content" style="margin-top:20px">
		<div class="content-header">
			<a href="/tutorial/categories/{category.slug}" class="top-info">
				<i class="material-icons">class</i> {category.title}
			</a>
			<span class="top-info estimasi"><i class="material-icons">access_time</i> estimasi {estimasi}</span>

			<h1>{title}</h1>
			<div class="writer">
				<Avatar {...user} />
			</div>
		</div>
		<div class="content-body">
			{@html content}
		</div>
	</section>
{:else}
	<section class="content" style="margin-top:20px">
		<div class="content-header">
			<span class="top-info"></span>
			<span class="top-info estimasi"><i class="material-icons">access_time</i></span>
			<h1>Tidak Ada Data</h1>
		</div>
	</section>
{/if}


<section id="shop" class="content">
	<div class="shop-list">

		{#await getData()}
			<div class="item">
				<ProductLandscape skeleton/>
			</div>
			<div class="item">
				<ProductLandscape skeleton/>
			</div>
		{:then pinnedProduct}
			{#each pinnedProduct as data (data.id)}
				<div class="item">
					<ProductLandscape {data} />
				</div>
			{/each}
		{/await}
	</div>
</section>

<Footer />