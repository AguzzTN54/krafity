<script context="module">
  export async function preload({ params }) {
    const { slug } = params;
    const res = await this.fetch(`/dummy/tutorials/categories/${slug}.json`);
    const tutorials = res.json();
    const cat = (await tutorials)[0];
    const categoryName = cat ? cat.category.title : slug.replace(/-/gi, ' ');
    if (res.status === 200) return { categoryName, tutorials };
    this.error(res.status, res.message);
  }
</script>

<script>
  import Banner from '../../../components/Banner.svelte';
  import { VideoList, VideoSidebar } from '../../../components/videos/index';
  import { TopbarCategoryList } from '../../../components/categories/index';
  import { HPostComponent } from '../../../components/posts/index';

  export let categoryName;
  export let tutorials;
</script>

<style>
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
  <title>{categoryName}</title>
</svelte:head>

<TopbarCategoryList />
<Banner title={categoryName} />

<section class="main row">
  <div class="content">
    
    <div class="main-post-list">
      <h2> Menampilkan hasil untuk "{categoryName}" </h2>
      <div class="main-list">

        {#await tutorials}
          {#each [1, 2, 3, 4, 5] as i (i)}
            <HPostComponent skeleton />
          {/each}

        {:then tutor} 
          {#if tutor.length < 1}
            <h2 class="text-center" style="margint-top: 20px;">Belum Ada Post</h2>
          {:else}
            {#each tutor as data (data.id)}
              <HPostComponent data={data} />
            {/each}
            <div class="text-center">
              <a href="/" class="load-more"> Load More </a>
            </div>
          {/if}
          
        {/await}

      </div>
    </div>

  </div>
	<div class="right-bar">
		<VideoSidebar />
		<div style="margin-top: 30px;"></div>
		<VideoList />
	</div>
</section>