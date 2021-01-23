<script>
  import axios from 'axios';
  import Banner from '../../components/Banner.svelte';
  import { UserComponent } from '../../components/users/index';

  const getData = async () => {
    try {
      const { data, status } = await axios.get('/dummy/katalog.json');
      const dataReturn = data.filter(({ user }) => user.role === 'pengrajin');
      if (status === 200) return dataReturn;
      throw new Error(`Terjadi Kesalahan dengan status code ${status}`);
    } catch (e) {
      console.error(e);
    }
  };
</script>

<style>
  .pengrajin {
    padding: 5%;
  }
  .list {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: auto;
  }
</style>

<svelte:head>
  <title>Pengrajin</title>
</svelte:head>

<Banner title="Pengrajin" />

<div class="pengrajin">
  <div class="list">

    {#await getData()}
      <UserComponent skeleton />
      <UserComponent skeleton />
      <UserComponent skeleton />

    {:then data}
      {#each data as {user, id} (id)}
        <UserComponent data={user} />
      {/each}
    {/await}

  </div>
</div>