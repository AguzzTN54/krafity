<script>
  import Drawer, {
    Content,
    Header,
    Title as DrawerTitle,
    Subtitle,
    Scrim,
  } from '@smui/drawer';
  import List, {
    Item, Text, Graphic, Separator, Subheader,
  } from '@smui/list';
  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';
  import H6 from '@smui/common/H6.svelte';
  import { getContext } from 'svelte';
  import { stores } from '@sapper/app';

  let drawerOpen;
  let active;

  const { page } = stores();
  const setActive = (value) => {
    active = value;
    drawerOpen = false;
    localStorage.setItem('backUrl', $page.path);
  };
  const responsive = getContext('responsive');

  export let segment;

  let showBackButton = false;
  $: if (segment === 'tutorial') {
    if ($page.params.slug) showBackButton = true;
    else showBackButton = false;
  } else showBackButton = false;
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
  :global(.brand) {
    margin:auto;
  }
  :global(.krafity-app-bar) {
    border-bottom: 1px solid #ccc;
  }

  @media screen and (min-width:780px) {
    :global(.brand) {
      margin-left: 2rem;
    }
  }
</style>

<TopAppBar variant="standart" prominent={false} dense class="krafity-app-bar">
  <Row>
    {#if $responsive}
      <Section>
        {#if showBackButton}
          <IconButton class="material-icons" on:click={() => { window.history.back(-1); }}>arrow_back_ios</IconButton>
        {:else}
          <IconButton class="material-icons" on:click={() => { drawerOpen = !drawerOpen; }}>menu</IconButton>
        {/if}
      </Section>
    {/if}

    <Section>
      <Title class="text-center brand">
        <a href="/" class="site-logo">
          <img src="/logo/krafity-logo.svg" alt="Krafity Logo">
        </a>
      </Title>
    </Section>

    <Section align="end" toolbar>
      {#if !$responsive}
        <IconButton class="material-icons" aria-label="Download">
          file_download
        </IconButton>
        <IconButton class="material-icons" aria-label="Print this page">
          print
        </IconButton>
        <IconButton class="material-icons" aria-label="Bookmark this page">
          bookmark
        </IconButton>
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
    <DrawerTitle>Super Mail</DrawerTitle>
    <Subtitle>It's the best fake mail app drawer.</Subtitle>
  </Header>
  <Content>
    <List>
      <Item href="/auth/login" rel="prefetch" on:click={() => setActive('Inbox')} activated={active === 'Inbox'}>
        <Graphic class="material-icons" aria-hidden="true">inbox</Graphic>
        <Text>Login</Text>
      </Item>
      <Item
        href="/auth/register"
        activated={active === 'register'}
        on:click={() => setActive('register')}
      >
        <Graphic class="material-icons" aria-hidden="true">star</Graphic>
        <Text>Daftar</Text>
      </Item>
      <Item
        href="javascript:void(0)">
        <Graphic class="material-icons" aria-hidden="true">send</Graphic>
        <Text>Sent Mail</Text>
      </Item>
      <Item
        href="javascript:void(0)">
        <Graphic class="material-icons" aria-hidden="true">drafts</Graphic>
        <Text>Drafts</Text>
      </Item>

      <Separator nav />
      <Subheader component={H6}>Labels</Subheader>
      <Item
        href="javascript:void(0)">
        <Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
        <Text>Family</Text>
      </Item>
      <Item
        href="javascript:void(0)">
        <Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
        <Text>Friends</Text>
      </Item>
      <Item
        href="javascript:void(0)">
        <Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
        <Text>Work</Text>
      </Item>
    </List>
  </Content>
</Drawer>

<Scrim />
