<script>
  import Textfield from '@smui/textfield';
  import Icon from '@smui/textfield/icon/index';
  import HelperText from '@smui/textfield/helper-text/index';
  import Snackbar, { Label } from '@smui/snackbar';
  import Button from '@smui/button';
  import axios from 'axios';
  import CONFIG from '../../site-config';
  import { auth, authError } from '../../functions/auth';

  const userField = {
    nick: '',
    first: '',
    last: '',
    nickInvalid: false,
    firstInvalid: false,
  };

  const emailField = {
    value: '',
    invalid: false,
  };

  const passField = {
    value1: '',
    value2: '',
    visible: false,
  };

  const showPass = () => {
    passField.visible = !passField.visible;
  };

  $: allFilled = ((userField.first !== '' && !userField.firstInvalid)
      && (userField.nick !== '' && !userField.nickInvalid)
      && (emailField.value !== '' && !emailField.invalid)
      && (passField.value1 !== '' && passField.value1 === passField.value2));

  let formElement = '';
  let mySnackbar;
  let snackText;
  const { API_URL } = CONFIG;
  const submit = async () => {
    if (!allFilled) {
      snackText = 'Pastikan semua field diisi dengan benar';
      return mySnackbar.open();
    }

    try {
      formElement.classList.add('form-disabled');
      const data = await axios.post(`${API_URL}/auth/local/register`, {
        firstName: userField.first,
        lastname: userField.last,
        username: userField.nick,
        email: emailField.value,
        password: passField.value1,
      });
      auth(data);
    } catch (e) {
      snackText = await authError(e);
      mySnackbar.open();
      formElement.classList.remove('form-disabled');
    }
  };
</script>

<style>
  :global(.form-group) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  :global(.form-group div) {
    flex-basis: 45% !important;
  }
</style>

<svelte:head>
  <title> Buat Akun Baru </title>
</svelte:head>

<Snackbar bind:this={mySnackbar} labelText={snackText}>
  <Label></Label>
</Snackbar>
<h2> Pendaftaran </h2>
<form on:submit|preventDefault={submit} bind:this={formElement}>
  <div class="form-group">
    <div>
      <Textfield
        dense
        withTrailingIcon
        input$required
        label="Nama Depan "
        variant="outlined"
        input$aria-controls="first-name"
        input$aria-describedby="first-name"
        invalid={userField.firstInvalid}
        on:change={() => { userField.firstInvalid = !userField.first.trim(); }}
        bind:value={userField.first}
      >
        <Icon class="material-icons"></Icon>
      </Textfield>
      <HelperText validationMsg style="white-space:nowrap" id="first-name">Nama Depan Harus diisi.</HelperText>
    </div>

    <div>
      <Textfield
        dense
        label="Nama Belakang"
        variant="outlined"
        input$aria-controls="last-name"
        input$aria-describedby="last-name"
        bind:value={userField.last}
      />
    </div>
  </div>

  <div>
    <Textfield
      dense
      label="Username "
      variant="outlined"
      style="width:100%;"
      input$required
      input$aria-controls="username"
      input$aria-describedby="username"
      invalid={userField.nickInvalid}
      on:change={() => { userField.nickInvalid = !userField.nick.trim(); }}
      bind:value={userField.nick}
    />
    <HelperText validationMsg id="username"> Username Harus Disisi </HelperText>
  </div>

  <div>
    <Textfield
      dense
      updateInvalid
      withTrailingIcon
      type="email"
      label="Email "
      variant="outlined"
      style="width:100%;"
      input$required
      input$autocomplete="email"
      input$aria-controls="email-address"
      input$aria-describedby="email-address"
      bind:value={emailField.value}
      bind:invalid={emailField.invalid}
    >
      <Icon class="material-icons">mail</Icon>
    </Textfield>
    <HelperText validationMsg id="email-address">That's not a valid email address.</HelperText>
  </div>

  <div>
    <Textfield
      dense
      withTrailingIcon
      label="Password "
      variant="outlined"
      style="width:100%;"
      input$required
      input$autocomplete="new-password"
      input$aria-controls="input-password"
      input$aria-describedby="input-password"
      type={passField.visible ? 'text' : 'password'}
      bind:value={passField.value1}
    >
      <Icon class="material-icons" role="button" on:click={showPass}>
        {passField.visible ? 'visibility' : 'visibility_off' }
      </Icon>
    </Textfield>
    <HelperText validationMsg id="input-password"> Password Harus Diisi </HelperText>
  </div>

  <div>
    <Textfield
      dense
      withTrailingIcon
      type="password"
      label="Konfirmasi Password "
      variant="outlined"
      style="width:100%;"
      input$required
      input$autocomplete="new-password"
      input$aria-controls="konfiramsi-password"
      input$aria-describedby="konfiramsi-password"
      invalid={passField.value2 !== '' ? (passField.value1 !== passField.value2) : false}
      bind:value={passField.value2}
    />
    <HelperText validationMsg id="konfirmasi-password">Password Tidak Sama</HelperText>
  </div>

  <Button
    disabled={!allFilled}
    variant="unelevated"
    ripple={false}
    class="primary-shadow"
    style="width:90%; margin-top:20px;"
  >
    Daftar
  </Button>

</form>
  <div style="margin-top:0px; margin-bottom: 20px; text-align:center">
    <a href="/auth/login" rel="prefetch">Sudah Punya Akun ?</a>
  </div>