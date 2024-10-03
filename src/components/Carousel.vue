<script setup lang="ts">
const screenshots: string[] = ['Gami_library1.png', 'Gami_achievements1.png', 'Gami_addons1.png']
</script>

<template>
  <div class="carousel w-full">
    <div
      v-for="(src, index) in screenshots"
      :id="`slide${index}`"
      class="carousel-item relative aspect-video w-full"
    >
      <img :src="src" class="object-contain" />
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a :href="`#slide${index == screenshots.length - 1 ? 0 : index + 1}`" class="btn btn-circle"
          >❮</a
        >
        <a :href="`#slide${index == 0 ? screenshots.length - 1 : index - 1}`" class="btn btn-circle"
          >❯</a
        >
      </div>
    </div>
  </div>
</template>
