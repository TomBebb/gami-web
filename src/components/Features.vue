<script setup lang="ts">
const features: { name: string; desc: string }[] = [
  {
    name: 'Cross-platform',
    desc: 'Supports Windows, Mac OS X, and Linux'
  },
  { name: 'Free', desc: 'No hidden costs.' },
  { name: 'Performant', desc: "Gami's UI is fast and lightweight." },
  { name: 'Modern', desc: 'Built with the latest .NET core, supports dark mode' },
  { name: 'Portable', desc: 'Can run from any folder' },
  { name: 'Achievement support', desc: 'Achievement support is built-in!' },
  { name: 'Privacy safe', desc: 'No data is stored remotely. Data is stored on your PC.' }
]
</script>

<template>
  <div class="grid select-none grid-cols-3 gap-4">
    <div
      v-for="feature in features"
      :key="feature.name"
      class="col-span-3 flex flex-col rounded-md border-2 border-gray-200 bg-gray-100 p-4 md:col-span-2 lg:col-span-1"
    >
      <div class="font-semibold">
        {{ feature.name }}
      </div>
      <div class="text-gray-500">
        {{ feature.desc }}
      </div>
    </div>
  </div>
</template>
