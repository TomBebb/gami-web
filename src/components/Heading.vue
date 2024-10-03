<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="h-19 navbar top-0 border-b-2 bg-base-100">
    <div class="flex-none">
      <a href="/" class="btn btn-square btn-ghost">
        <img src="/icon.svg" />
      </a>
    </div>
    <div class="flex-1">
      <a class="btn btn-ghost pointer-events-none text-xl"> Gami </a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li>
          <a href="https://github.com/TomBebb/Gami"
            ><icon icon="simple-icons:github" /> View Github Source Code
          </a>
        </li>
        <li>
          <a href="https://github.com/users/TomBebb/projects/2/views/1"
            ><icon icon="simple-icons:github" /> View Issues / Roadmap
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
