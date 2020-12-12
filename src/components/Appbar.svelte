<script>
  import Drawer, {
    Content,
    Header,
    Title as DrawerTitle,
    Subtitle,
    Scrim,
  } from '@smui/drawer';
  import List, {
    Item, Text, Graphic, Separator,
  } from '@smui/list';
  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';
  import { getContext } from 'svelte';
  import { goto, stores } from '@sapper/app';

  export let segment;
  const { page } = stores();

  let showBackButton = false;
  $: if (segment === 'tutorial') {
    const { params, path } = $page;
    if (params.slug && path.indexOf('categories') < 0) showBackButton = true;
    else showBackButton = false;
  } else showBackButton = false;

  let drawerOpen;
  let active = segment;

  const setActive = (value) => {
    active = value;
    drawerOpen = false;
    localStorage.setItem('backUrl', $page.path);
  };
  const responsive = getContext('responsive');

  const topbarItem = [
    {
      title: 'Katalog',
      icon: 'store',
      url: '/katalog',
    },
    {
      title: 'Tutorial',
      icon: 'streetview',
      url: 'tutorial',
    },
    {
      title: 'Pengrajin',
      icon: 'face',
      url: '/pengrajin',
    },
  ];

  const drawerItem = [
    {
      title: 'Tutorial',
      icon: 'streetview',
      url: '/tutorial',
    },
    {
      title: 'Katalog',
      icon: 'store',
      url: '/katalog',
    },
    {
      title: 'Pengrajin',
      icon: 'face',
      url: '/pengrajin',
    },
  ];
</script>

<style>
  .site-logo {
    height: 30px;
    width: 100px;
    display: block;
    margin: auto;
  }
  .site-logo img {
    width: auto;
    margin-left: auto;
    margin-right: auto;
  }

  .nav-link {
    color:var(--mdc-theme-primary);
    opacity: 0.7;
    transition: all .2s;
    vertical-align: middle;
    display: inline-block;
    margin: 0 5px;
    text-transform: uppercase;
    font-size:.9rem;
  }
  .nav-link:hover {
    opacity: 1;
  }

  .nav-link > i{
    font-size: 1rem;
    padding:0;
    margin:0;
  }

  .btn {
    color: #fff;
    background-color: var(--mdc-theme-primary);
    padding: 5px 10px;
    font-size: .9rem;
    border-radius: 2px;
    margin-left: 10px;
  }

  :global(.brand-logo) {
    margin:auto;
  }
  :global(.krafity-app-bar) {
    padding-left: 5%;
    padding-right: 5%;
    border-bottom: 1px solid #ccc;
  }

  @media screen and (min-width:780px) {
    :global(.brand-logo) {
      margin-left: 0;
    }
  }
</style>

<TopAppBar variant="standart" prominent={false} dense class="krafity-app-bar">
  <Row>
    {#if $responsive}
      <Section>
        {#if showBackButton}
          <IconButton class="material-icons" on:click={() => { goto('/tutorial'); }}>arrow_back_ios</IconButton>
        {:else}
          <IconButton class="material-icons" on:click={() => { drawerOpen = !drawerOpen; }}>menu</IconButton>
        {/if}
      </Section>
    {/if}

    <Section>
      <Title class="text-center brand-logo">
        <a href="/" class="site-logo">
          <img src="/assets/logo/krafity-logo.svg" alt="Krafity Logo">
        </a>
      </Title>
    </Section>

    <Section align="end" toolbar>
      {#if !$responsive}
        {#each topbarItem as { icon, title, url} (url)} 
          <a href={url} rel="prefetch" class="nav-link">
            <i class="material-icons"> {icon} </i>
            {title}
          </a>
        {/each}
        <a href="/auth/login" class="btn">
          Login
        </a>
      {:else}
        <IconButton class="material-icons" aria-label="Download">
          search
        </IconButton>
      {/if}
    </Section>
  </Row>
</TopAppBar>

<!-- Drawer -->
<Drawer variant="modal" bind:open={drawerOpen}>
  <Header>
    <DrawerTitle>
      <img src="/assets/logo/krafity-logo.svg" alt="Krafity brand" style="width:100px;">
    </DrawerTitle>
    <Subtitle>Share Your Creativity.</Subtitle>
  </Header>
  <Content>
    <List>
      {#each drawerItem as { url, icon, title } (url)}
        <Item
          rel="prefetch"
          href={url}
          activated={active === title.toLowerCase()}
          on:click={() => setActive(title.toLowerCase())}
        >
          <Graphic class="material-icons" aria-hidden="true">{icon}</Graphic>
          <Text>{title}</Text>
        </Item>
      {/each}

      <Separator nav />
      <Item
        rel="prefetch"
        href="/auth/login"
        activated={active === 'Inbox'}
        on:click={() => setActive('Inbox')}
      >
        <Graphic class="material-icons" aria-hidden="true">inbox</Graphic>
        <Text>Login</Text>
      </Item>
      <Item
        rel="prefetch"
        href="/auth/register"
        activated={active === 'register'}
        on:click={() => setActive('register')}
      >
        <Graphic class="material-icons" aria-hidden="true">star</Graphic>
        <Text>Daftar</Text>
      </Item>
    </List>
  </Content>
</Drawer>

<Scrim />
