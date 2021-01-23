<script>
  export let style = '';
  export let className = '';
  export let width = '';
  export let height = '';
</script>

<style>
  .load-placeholder {
    margin: 4px;
    border-radius: 5px;
    background-image: linear-gradient(
      to right,
      #ececec 2%,
      #e0e0e0 18%,
      #ececec 33%
    );
    background-size: 300%;
    background-position: 100%;
    animation: placeholder 1.7s linear infinite forwards;
  }

  @keyframes placeholder {
    0% {
      background-position: 100%;
    }
    100% {
      background-position: -100%;
    }
  }
</style>

<div
  class="load-placeholder {className}"
  style="width:{width}; height:{height};{style}"
></div>