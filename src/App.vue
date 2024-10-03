<script setup lang="ts">
import DownloadButton from './components/DownloadButton.vue'
import SponsorLinks from './components/SponsorLinks.vue'
import Heading from './components/Heading.vue'
import Features from './components/Features.vue'
import Carousel from './components/Carousel.vue'
</script>

<template>
  <Heading />
  <div class="flex flex-col items-center gap-3 p-2">
    <carousel class="max-w-[80vw]" />
    <div class="p-3 text-xl font-bold">Features</div>
    <Features />
    <SponsorLinks />
    <DownloadButton />
  </div>
</template>
