<script>
	import Banner from '../../components/Banner.svelte';
	import { MainPostList } from '../../components/posts/index';
	import { VideoList, VideoSidebar } from '../../components/videos/index';
	import { TopbarCategoryList } from '../../components/categories/index';
</script>

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

<svelte:head>
	<title> Tutorial Untukmu </title>
</svelte:head>

<TopbarCategoryList />
<Banner title="Tutorial" />

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