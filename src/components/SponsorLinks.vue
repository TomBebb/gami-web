<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="card card-compact bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Before you download</h2>
      <p>
        This project needs effort and costs to maintain and develop. Please consider donating or
        sponsoring.
      </p>
      <div class="card-actions justify-end">
        <a class="btn btn-secondary" href="https://github.com/sponsors/TomBebb" target="_blank">
          <Icon icon="simple-icons:githubsponsors" />Via Github
        </a>
        <a class="btn btn-primary" href="https://ko-fi.com/tophattedcoder" target="_blank">
          <Icon icon="simple-icons:kofi" />Via Ko-Fi
        </a>
        <a class="btn btn-accent" href="https://liberapay.com/tophattedcoder" target="_blank">
          <Icon icon="simple-icons:liberapay" />Via LiberaPay
        </a>
        <a class="btn" href="https://patreon.com/tombebb" target="_blank">
          <Icon icon="simple-icons:patreon" />Via Patreon
        </a>
      </div>
    </div>
  </div>
</template>
