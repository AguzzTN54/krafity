<script>
  import { goto, stores } from '@sapper/app';
  import axios from 'axios';
  import { mobile } from '../../store';
  import { Skeleton } from '../utils/index';

  const { page } = stores();
  $: ({ query, path } = $page);
  $: ({ type } = query);
  $: console.log(query);

  const getCategoryList = async () => {
    try {
      const { data, status } = await axios.get(
        '/dummy/katalog/categories.json',
      );
      if (status === 200) return data;
      throw new Error(`Error Code ${status}`);
    } catch (e) {
      console.error('Terjadi Kesalaham', e);
    }
  };

  let jenis = true;
  let categories = true;
  let dikirimDari = true;
  let rangeHarga = true;

  const objToUrlparam = (obj) => {
    const urlparam = Object.keys(obj)
      .map((key) => `${key}=${obj[key]}`)
      .join('&');
    return `${path}?${urlparam}`;
  };

  const linkToType = (typeTarget) => {
    const param = query;
    param.type = query.type !== typeTarget ? typeTarget : '';
    return objToUrlparam(param);
  };

  const linkToCategory = (event, target) => {
    const { category } = query;
    const param = query;
    let arrTarget = (category || '').split(',');
    if (event.target.checked) {
      if (arrTarget.includes(target)) return;
      arrTarget.push(target);
      arrTarget = arrTarget.filter((v) => !!v);
    } else {
      arrTarget = arrTarget.filter((v) => v !== target);
    }

    param.category = arrTarget.join(',');
    return goto(objToUrlparam(param));
  };
</script>

<div class="filter">
  {#if $mobile}
    <button class="filter-button">
      <i class="material-icons">filter_list</i>
      Filter
    </button>
  {:else}
    <h2>Filter</h2>
  {/if}

  <div class="filter-list">
    <div class="item {jenis ? 'active' : ''}">
      <h3
        on:click={() => {
          jenis = !jenis;
        }}
      >
        Jenis
      </h3>
      <div class="jenis item-item">
        <button
          on:click|preventDefault={() => goto(linkToType('barangjadi'))}
          class={type === 'barangjadi' ? 'active' : ''}
        >
          Barang Jadi
        </button>
        <button
          on:click|preventDefault={() => goto(linkToType('alatbahan'))}
          class={type === 'alatbahan' ? 'active' : ''}
        >
          Alat / Bahan</button>
      </div>
    </div>

    <div class="item {categories ? 'active' : ''}">
      <h3
        on:click={() => {
          categories = !categories;
        }}
      >
        Categories
      </h3>
      <ul class="category-list" style="margin:0; padding:0">
        {#await getCategoryList()}
          <li class="item-item">
            <Skeleton width="100%" height="7px" style="margin: 2px 0;" />
          </li>
          <li class="item-item">
            <Skeleton width="100%" height="7px" style="margin: 2px 0;" />
          </li>
          <li class="item-item">
            <Skeleton width="100%" height="7px" style="margin: 2px 0;" />
          </li>
        {:then data}
          {#each data as { title, slug } (slug)}
            <li class="item-item">
              <input
                type="checkbox"
                id={slug}
                on:change={(e) => linkToCategory(e, slug)}
                checked={(query.category || '').split(',').includes(slug)}
              />
              <label for={slug}> {title} </label>
            </li>
          {/each}
        {/await}
      </ul>
    </div>

    <div class="item {dikirimDari ? 'active' : ''}">
      <h3
        on:click={() => {
          dikirimDari = !dikirimDari;
        }}
      >
        Dikirim dari
      </h3>
    </div>

    <div class="item {rangeHarga ? 'active' : ''}">
      <h3
        on:click={() => {
          rangeHarga = !rangeHarga;
        }}
      >
        Range Harga
      </h3>
    </div>
  </div>
</div>

<style>
  .filter {
    min-width: 280px;
    width: 20%;
  }

  h2 {
    font-weight: 800;
    margin: 15px 0;
    font-family: 'Nunito Sans', 'Open Sans', Tahoma, sans-serif;
  }

  h3 {
    margin: 0;
    cursor: pointer;
    position: relative;
  }
  h3::after {
    position: absolute;
    top: 50%;
    transform: translateY(calc(-50% - 8px)) rotate(-90deg);
    right: 10px;
    content: '\203a';
    display: block;
    font-size: 1.5rem;
    width: 15px;
    height: 15px;
    line-height: 8px;
    transition: transform 0.3s;
  }

  .filter-list {
    margin-right: 10px;
    border-radius: 10px;
    box-shadow: 0 0 3px rgba(200, 200, 200, 0.6);
  }

  .item {
    font-size: 0.75rem;
    padding: 10px 15px;
    border-bottom: 1px solid rgba(200, 200, 200, 0.5);
  }
  .item:last-child() {
    border-bottom: unset;
  }

  .item-item {
    height: 0;
    overflow: hidden;
    transition: all 0.5s;
  }
  .item.active .item-item {
    height: 20px;
  }
  .item.active h3::after {
    transform: translateY(-50%) rotate(90deg);
  }

  .active .jenis.item-item {
    margin-top: 5px;
    height: 30px;
  }
  .jenis button {
    display: inline-block;
    padding: 7px 10px;
    margin: 0 5px;
    border-radius: 30px;
    background-color: #fff;
    outline: none;
    color: inherit;
    font-size: 0.75rem;
    cursor: pointer;
    border: 1px solid rgb(200, 200, 200);
  }
  .jenis button.active {
    color: var(--mdc-theme-primary);
    border: 1px solid var(--mdc-theme-primary);
  }

  ul::marker {
    display: none;
  }
  .category-list li label,
  .active .category-list {
    margin-top: 5px;
  }

  @media screen and (max-width: 750px) {
    .filter-button {
      background-color: transparent;
      border: 1px solid rgb(200, 200, 200);
      border-radius: 5px;
      margin: 5px;
      padding: 5px 10px;
    }
    .filter-button,
    i.material-icons {
      font-size: 0.8rem;
    }

    .filter-list {
      display: none;
    }
  }
</style>
