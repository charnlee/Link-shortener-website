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

body {
  /* background-color: #e0f7fa;  */
  background-image: url('image\\Snipaste_20200614_221327.png'); 
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  margin: 0;
  font-family: 'Arial', sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  min-height: 100vh;
}
</style>
