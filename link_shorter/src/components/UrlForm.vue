<template>
    <div>
      <h2>URL Shortener</h2>
      <form @submit.prevent="submitUrl">
        <input v-model="url" type="text" placeholder="Enter URL" required />
        <button type="submit">Shorten</button>
      </form>
      <p v-if="shortUrl">Shortened URL: <a :href="shortUrl" target="_blank">{{ shortUrl }}</a></p>
    </div>
  </template>
  
  <script>
  import { shortenUrl } from '../api';
  
  export default {
    name:'UrlForm',
    data() {
      return {
        url: '',
        shortUrl: ''
      };
    },
    methods: {
      async submitUrl() {
        try {
          const response = await shortenUrl(this.url);
          this.shortUrl = response.data.shortUrl;
        } catch (error) {
          console.error('Error shortening URL:', error);
        }
      }
    }
  };
  </script>
  
  <style>
  /* Add some basic styling */
  </style>
  