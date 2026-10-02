<script setup lang="ts">
defineProps<{ href?: string; plain?: boolean }>()
</script>

<template>
  <a v-if="href" :href="href" :class="['action', { 'action--plain': plain }]">
    <slot /><span class="arrow" aria-hidden="true">→</span>
  </a>
  <button v-else type="button" :class="['action', { 'action--plain': plain }]">
    <slot /><span class="arrow" aria-hidden="true">→</span>
  </button>
</template>
