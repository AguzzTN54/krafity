<script>
  import Textfield from '@smui/textfield';
  import Icon from '@smui/textfield/icon/index';
  import HelperText from '@smui/textfield/helper-text/index';
  import Snackbar, { Label } from '@smui/snackbar';
  import Button from '@smui/button';
  import axios from 'axios';
  import CONFIG from '../../site-config';
  import { auth, authError } from '../../functions/auth';

  let userField = '';
  let passField = '';
  let formElement = '';
  let mySnackbar = '';
  let snackText = '';

  const { API_URL } = CONFIG;
  const submit = async () => {
    try {
      formElement.classList.add('form-disabled');
      const data = await axios.post(`${API_URL}/auth/local`, {
        identifier: userField,
        password: passField,
      });
      auth(data);
    } catch (e) {
      snackText = await authError(e);
      mySnackbar.open();
      formElement.classList.remove('form-disabled');
    }
  };

  let passVisible = false;
  const showPass = () => {
    passVisible = !passVisible;
  };
</script>

<style>
  :global(.form-group) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  :global(.form-group  div) {
    flex-basis: 45%;
  }
</style>

<svelte:head>
  <title> Masuk ke Akunmu </title>
</svelte:head>

<Snackbar bind:this={mySnackbar} labelText={snackText}>
  <Label></Label>
</Snackbar>
<h2> Masuk </h2>
<form on:submit|preventDefault={submit} bind:this={formElement}>
  <div>
    <Textfield
      dense
      withTrailingIcon
      type="text"
      label="Username atau Email"
      variant="outlined"
      style="width:100%;"
      input$autocomplete="username"
      input$aria-controls="username"
      input$aria-describedby="username"
      bind:value={userField}
    >
      <Icon class="material-icons">mail</Icon>
    </Textfield>
    <HelperText />
  </div>

  <div>
    <Textfield
      dense
      withTrailingIcon
      type={passVisible ? 'text' : 'password'}
      label="Konfirmasi Password"
      variant="outlined"
      style="width:100%;"
      input$autocomplete="new-password"
      input$aria-controls="konfiramsi-password"
      input$aria-describedby="konfiramsi-password"
      bind:value={passField}
    >
    <Icon class="material-icons" role="button" on:click={showPass}>
      {passVisible ? 'visibility' : 'visibility_off' }
    </Icon>
    </Textfield>
  </div>

  <Button variant="unelevated" ripple={false} class="primary-shadow" style="width:90%; margin-top:20px"> Masuk </Button>

</form>

<div style="margin-top:10px; margin-bottom:30px; text-align:center">
  <a href="/auth/register" rel="prefetch"> Belum Punya Akun ? </a>
</div>