<script>
  import { stores } from '@sapper/app';
  import CONFIG from '../../site-config';

  const { SITE_NAME } = CONFIG;
  const { page } = stores();
  const { path } = $page;
  const itm = path.split('/');

  export let list = [];
  const defaultList = [
    {
      title: SITE_NAME,
      link: '/',
    },
    {
      title: itm[1],
      link: `/${itm[1]}`,
    },
  ];

  if (list.length < 1) list = defaultList;
</script>

<div class="breadcrumbs">
  {#each list as { title, link }}
    {#if title}
      {#if link}
        <a href={link} class="item"> {title} </a>
      {:else}<span class="item"> {title} </span>{/if}
    {/if}
  {/each}
</div>

<style>
  .breadcrumbs {
    text-transform: capitalize;
    display: inline-block;
    margin: 20px 5% 0;
    padding: 0px 20px 3px;
    border-radius: 50px;
    box-shadow: 0 0 3px rgba(205, 205, 205, 0.6);
  }
  .item {
    color: var(--mdc-theme-primary);
  }
  .item:nth-child(1)::before {
    content: '\2022';
    margin-left: 0;
  }
  .item::before {
    content: '\203a';
    font-size: 1.2rem;
    margin: 0 5px;
    display: inline-block;
  }
</style>
