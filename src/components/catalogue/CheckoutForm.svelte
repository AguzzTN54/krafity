<script>
  import { fade } from 'svelte/transition';
  import { Skeleton } from '../utils/index';
  import { formatNumber } from '../../functions/formatPrice';
  // import { windowWith } from '../../store';

  export let skeleton = '';
  export let price = 0;

  // $: mobile = windowWidth < 600;
  let jumlahPesanan = 1;
  let addNotes = false;
</script>

<div class="checkout">
  <div class="checkout-form">
    {#if skeleton}
      <Skeleton width="150px" height="12px" />
      <div class="input-jumlah">
        <Skeleton width="70px" height="25px" />
      </div>

      <div class="totalPrice">
        <Skeleton width="60px" height="12px" />
        <Skeleton width="60px" height="15px" />
      </div>
      <Skeleton width="100%" height="25px" />
    {:else}
      <b class="atur"> Atur Jumlah Pesanan </b>
      <!-- Jumlah Pesanan -->
      <div class="body">
        <div class="input-jumlah">
          <button
            class="count-btn min"
            disabled={jumlahPesanan < 2}
            on:click={() => {
              jumlahPesanan--;
            }}
          >-</button>
          <input type="number" bind:value={jumlahPesanan} />
          <button
            class="count-btn plus"
            on:click={() => {
              jumlahPesanan++;
            }}
          >+</button>
        </div>

        <!-- Catatan -->
        <button
          class="addMessage"
          on:click={() => {
            addNotes = !addNotes;
          }}
        >
          <i class="material-icons">create</i>
          Tambahkan Catatan</button>

        {#if addNotes}
          <div class="notes" transition:fade={{ duration: 300 }}>
            <textarea
              name="notes"
              id="notes"
              placeholder="Varian / ukuran / Warna / dll"
            />
          </div>
        {/if}

        <div class="totalPrice">
          <span>Total</span>
          <span> Rp{formatNumber(price * jumlahPesanan)},-</span>
        </div>
        <div class="button">
          <button class="pesan-btn"> Beli Sekarang </button>
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  .checkout {
    flex-basis: 20%;
    position: relative;
  }
  .checkout-form {
    padding: 10px;
    border-radius: 10px;
    position: sticky;
    top: 60px;
    border: 2px solid #eee;
  }
  .input-jumlah {
    margin: 10px 0;
    display: flex;
    justify-content: center;
  }
  .input-jumlah input {
    width: 70px;
    margin: 0 10px;
    outline: 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding-right: 10px;
    padding-left: 10px;
    font-weight: bold;
    font-size: 1rem;
  }
  .count-btn {
    width: 35px;
    height: 35px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    font-size: 1.5rem;
    border: 1px solid #ccc;
    outline: 0;
    color: initial;
    cursor: pointer;
    transition: all 0.5s;
  }
  .count-btn:not(:disabled) {
    background-color: var(--mdc-theme-primary);
    color: #fff;
    border-color: var(--mdc-theme-primary);
  }

  .addMessage {
    border: 0;
    outline: 0;
    background-color: transparent;
    color: var(--mdc-theme-primary);
    font-size: 0.85rem;
    cursor: pointer;
    margin: 10px;
  }
  i.material-icons {
    font-size: 1rem;
  }

  textarea {
    width: 100%;
    height: 80px;
    border: 2px solid #ccc;
    outline: 0;
    padding: 8px;
    margin: 0px 0 10px;
    border-radius: 5px;
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif;
  }

  .totalPrice {
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .totalPrice span:nth-child(1) {
    font-size: 0.9rem;
  }
  .totalPrice span:nth-child(2) {
    font-size: 1.1rem;
  }
  .pesan-btn {
    background-color: var(--mdc-theme-primary);
    outline: 0;
    border: 0;
    border-radius: 4px;
    padding: 10px;
    color: #fff;
    display: block;
    width: calc(100% - 10px);
    margin: 5px;
    cursor: pointer;
  }

  @media screen and (max-width: 970px) {
    .checkout {
      flex-basis: unset;
    }
    .checkout-form {
      border: 0;
      border-top: 3px solid #eee;
      border-radius: unset;
      position: fixed;
      z-index: 1000;
      bottom: 0;
      left: 0;
      top: unset;
      width: 100%;
      height: 100px;
      background-color: #fff;
      padding: 10px 7%;
    }
    .notes,
    .addMessage {
      display: none;
    }
    .body {
      display: flex;
    }
    .totalPrice {
      width: 100%;
      padding: 0 20px;
    }

    .button {
      width: 30%;
      min-width: 150px;
    }
  }

  @media screen and (max-width: 600px) {
    .input-jumlah,
    .totalPrice,
    .atur {
      display: none;
    }
    .button {
      width: 100%;
    }
    .checkout-form {
      height: 70px;
    }
  }
</style>
