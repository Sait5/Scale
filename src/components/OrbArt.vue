<script setup lang="ts">
defineProps<{ compact?: boolean }>()
</script>

<template>
  <div :class="['orb-art', { 'orb-art--compact': compact }]" aria-hidden="true">
    <div class="orb orb--one"><span /></div>
    <div class="orb orb--two"><span /></div>
    <div v-if="!compact" class="orb orb--three"><span /></div>
  </div>
</template>
