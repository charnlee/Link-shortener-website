<template>
  <div id="app">
    <UrlForm/>
  </div>
</template>

<script>
import UrlForm from './components/UrlForm.vue';

export default {
  name: 'App',
  components: {
    UrlForm
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
