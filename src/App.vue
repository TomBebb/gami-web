<script setup lang="ts">
import DownloadButton from './components/DownloadButton.vue'
import SponsorLinks from './components/SponsorLinks.vue'
import Heading from './components/Heading.vue'
</script>

<template>
  <Heading />
  <SponsorLinks />
  <button class="btn" @click="count++">+</button>
  <div>
    <a href="https://vitejs.dev" target="_blank"> </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="/public/icon.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <DownloadButton />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
