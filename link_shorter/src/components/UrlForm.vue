<template>
  <el-container class="container" style="background-color: #f0f0f0; padding: 20px; border-radius: 10px;">
    <el-header>
      <h2 class="text-center">URL Shortener</h2>
    </el-header>
    <el-main>
      <el-form @submit.prevent="submitUrl" label-position="top">
        <el-row :gutter="20" class="align-items-center">
          <el-col :span="18">
            <el-form-item label="Enter URL">
              <el-input
                v-model="url"
                placeholder="Enter URL"
                clearable
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="&nbsp;">
              <el-button type="success" @click="submitUrl" block>Shorten</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-alert
        v-if=true
        type="success"
        :closable="false"
        title="Shortened URL"
        description="Click the link to open the shortened URL."
        class="mt-4"
        center
      >
        <a :href="shortUrl" target="_blank">{{ shortUrl }}</a>
      </el-alert>
    </el-main>
  </el-container>
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
  
  <style scoped>
  .container {
    max-width: 50%;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .text-center {
    text-align: center;
  }
  .mt-4 {
    margin-top: 16px;
  }
  </style>
  