<template>
  <div id="app">
    <index></index>
  </div>
</template>

<script>
import index from "./components/index.vue";

export default {
  name: "app",
  components: {
    index
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
