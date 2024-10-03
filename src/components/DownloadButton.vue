<script setup lang="ts">
import { useAsyncState } from '@vueuse/core'
import { getLatestLink } from '../common/github'

const linkData = useAsyncState(getLatestLink, '').state
</script>

<template>
  <a :href="linkData" class="btn btn-success">Download</a>
</template>

<style scoped></style>
