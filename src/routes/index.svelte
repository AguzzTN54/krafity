<script>
	import '../theme/style.scss';
	import { TopbarCategoryList, RecomendedCategory } from '../components/categories/index';
	import { MainPostList, PostList1 } from '../components/posts/index';
	import { TagComponent1 } from '../components/tags/index';
	import { FeaturedProducts, ProductComponent1 } from '../components/catalogue/index';
	import { PengrajinAvatar } from '../components/users/index';
	import { VideoList, VideoSidebar } from '../components/videos/index';
	import Footer from '../components/Footer.svelte';
</script>

<svelte:head>
	<title> Krafity - Share Your Creativity </title>
	<meta name="title" content="Krafity - Temukan dan Bagikan Kreativitas"/>
	<meta name="description" content='Situs berbagi karya, temukan juga karya karya terbaik di sini, mulai dari kerajianan tangan, pernak pernik hingga ide dekorasi ruangan dari kerajinan tangan.'/>
	
	<link rel="fluid-icon" href="https://krafity.vercel.app/assets/images/screen.png" title="Krafity"/>
	<meta property="og:type" content="website"/>
	<meta property="og:url" content="https://krafity.vercel.app/"/>
	<meta property="og:title" content="Krafity - Temukan dan Bagikan Kreativitas"/>
	<meta property="og:description" content='Situs berbagi karya, temukan juga karya karya terbaik di sini, mulai dari kerajianan tangan, pernak pernik hingga ide dekorasi ruangan dari kerajinan tangan.'/>
	<meta property="og:image" content="https://krafity.vercel.app/assets/images/screen.png"/>

	<meta property="twitter:card" content="summary_large_image"/>
	<meta property="twitter:url" content="https://krafity.vercel.app/"/>
	<meta property="twitter:title" content="Krafity - Temukan dan Bagikan Kreativitas"/>
	<meta property="twitter:description" content='Situs berbagi karya, temukan juga karya karya terbaik di sini, mulai dari kerajianan tangan, pernak pernik hingga ide dekorasi ruangan dari kerajinan tangan.'/>
	<meta property="twitter:image" content="https://krafity.vercel.app/assets/images/screen.png"/>
</svelte:head>

<TopbarCategoryList />
<PostList1 />
<FeaturedProducts />

<section class="row row-1">
	<div class="col">
		<RecomendedCategory />
	</div>
	<div class="col tags">
		<TagComponent1 />
	</div>
</section>

<div style="margin-top: 40px;"></div>
<ProductComponent1 />

<div style="margin-top: 20px;"></div>
<PengrajinAvatar />

<section class="main row">
	<div class="content">
		<MainPostList />
	</div>
	<div class="right-bar">
		<VideoSidebar />
		<div style="margin-top: 30px;"></div>
		<VideoList />
	</div>
</section>

<Footer />

<style>
	.row {
		display: flex;
		width: 100%;
		padding: 10px 5rem;
		margin-top: 15px;
		margin-bottom: 20px;
		position: relative;
		/* border-top:1px solid #ccc; */
	}
	.row-1::after {
		content: '';
		display: flex;
		width: 85%;
		border-bottom: 2px solid #eee;
		margin-top: 10px;
		position: absolute;
		left: 8%;
		bottom: -15px;
	}

	.col {
		flex-grow: 1;
	}

	.content {
		flex-basis: 65%;
	}

	.right-bar {
		flex-basis: 35%;
	}

	@media (max-width: 780px) {
		.row {
			flex-direction: column;
			padding-left: 5%;
			padding-right: 5%;
		}
		.tags {
			margin-top: 30px;
		}
		.content {
			margin-bottom: 15px;
		}
		.content::after {
			content: '';
			display: block;
			width: 80%;
			margin: 20px auto auto;
			border-bottom: 1px solid #dadada;
		}
	}
</style>
