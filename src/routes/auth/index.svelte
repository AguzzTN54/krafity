<script>
  import { goto } from '@sapper/app';
  import { onMount } from 'svelte';

  onMount(() => {
    goto('/');
  });
</script>

<div class="err">
  tidak seharusnya anda di halaman ini
</div>