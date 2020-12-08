<script context="module">
	export async function preload({ params }) {
	  // the `slug` parameter is available because
	  // this file is called [slug].svelte
	  // const res = await this.fetch(`blog/${params.slug}.json`);
	  // const data = await res.json();

	  // if (res.status === 200) return { post: data };
	  // this.error(res.status, data.message);
	  const { slug } = params;
	  return { post: { slug } };
	}
</script>

<script>
	import Footer from '../../components/Footer.svelte';
	import { Avatar } from '../../components/users/index';
	import { ProductLandscape } from '../../components/catalogue/index';

	export let post;
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
		margin-top: -20px;
	}

	img {
		margin-top: 2rem;
	}

	p {
		margin-top:2rem;
		line-height: 1.8em;
	}

	h2, h3 {
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
	<title>{post.slug}</title>
</svelte:head>

<section class="content" style="margin-top:20px">
	<div class="content-header">
		<a href="/tutorial/categories/yeya" class="top-info"> <i class="material-icons">class</i> Category </a>
		<span class="top-info estimasi"><i class="material-icons">access_time</i> estimasi 3 jam</span>

		<h1>Ini judulnya ya boquehhh</h1>
		<div class="writer">
			<Avatar />
		</div>
	</div>
	<div class="content-body">
		<img src="/assets/images/bg1-500.webp" alt="iki Gambar" class="pic-content">

		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, maiores deleniti voluptate reiciendis eos possimus labore fugiat. Veniam vero quis eius, porro facere culpa unde sunt quasi aliquam. Ut itaque perspiciatis repudiandae quaerat debitis accusamus velit! Ducimus natus minus voluptatibus modi ab maiores a ut voluptatum quibusdam atque voluptatem mollitia iure libero eos, sapiente at obcaecati iusto consequatur eveniet aut voluptas ratione? Omnis aliquam et vero laudantium iste incidunt, eum quo qui neque dolor distinctio asperiores. Earum obcaecati voluptas laudantium porro odio, dignissimos aut omnis eos iure impedit sequi consectetur. Excepturi at ipsa inventore, voluptatem minus deserunt esse expedita porro accusamus iure illum nemo amet consequuntur natus. Eum tempore amet porro? Quaerat incidunt natus ullam, aperiam laudantium quod tempora repellat laboriosam, facilis iure asperiores cupiditate magnam ut. Ab est sint nemo asperiores ad animi, labore ex quae perferendis quasi eum aspernatur adipisci fugit ipsum nobis odio, beatae unde in illum.
		</p>

		<h2>Ini H2</h2>
		<h3>Ini h3</h3>
		<ul>
			<li>list 1</li>
			<li>list 1</li>
			<li>list 1</li>
		</ul>

		<ol>
			<li>list 1</li>
			<li>list 1</li>
			<li>list 1</li>
		</ol>

		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis esse illum ea vel, fugiat praesentium sint eaque odio accusantium consequuntur magnam officiis qui ex eveniet reiciendis a corrupti quisquam libero rem alias quas assumenda et? Quisquam sed totam dolore magnam eos recusandae fugit. Dolor itaque debitis, inventore iusto, tempore repellat at et magni atque sed delectus commodi. Non expedita doloribus debitis architecto aut sed minima consequatur et minus sint? Quas consequatur adipisci placeat repellendus maiores, rerum veritatis enim illum qui perspiciatis velit expedita. Facere voluptas dolorum amet, magnam saepe aut unde, veniam exercitationem incidunt similique placeat. Minus perspiciatis consequatur officiis.
		</p>

		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quo repudiandae obcaecati, nesciunt atque, cum aperiam debitis maiores harum reprehenderit, numquam ab repellat! Asperiores in adipisci, numquam corrupti quod omnis necessitatibus ex dolorem esse, illum amet aliquam sed reiciendis? Dolor officia expedita fugit corrupti ratione sapiente? Soluta quibusdam quae omnis sit delectus cumque, nisi voluptates mollitia dolores enim commodi aliquid. Veritatis dicta nulla id, suscipit dolorum mollitia facere deserunt a vel. Nesciunt eius unde sed corporis repellat consectetur! Libero eum laborum inventore earum consequatur explicabo eveniet numquam, et harum facilis quas quae dolore aut deserunt modi laudantium quia ipsa fugiat iusto dolorum, nulla ducimus! Dolor esse officiis assumenda aliquid consectetur? Reiciendis officia aliquid numquam quod officiis suscipit voluptatem molestias reprehenderit, dignissimos sapiente vero dolores commodi natus rerum ratione ab incidunt maiores! Ipsa quod deleniti facilis sunt debitis eligendi, adipisci porro tempore dolor officia quisquam exercitationem, culpa maiores laborum modi magnam architecto quo 
		</p>
	</div>
</section>

<section id="shop" class="content">
	<div class="shop-list">
		<div class="item">
			<ProductLandscape />
		</div>
		<div class="item">
			<ProductLandscape />
		</div>
		<div class="item">
			<ProductLandscape />
		</div>
	</div>
</section>

<Footer />