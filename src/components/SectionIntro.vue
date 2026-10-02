<script setup lang="ts">
import { t } from '../i18n'
defineProps<{ eyebrow: string; title: string; description?: string }>()
</script>

<template>
  <div class="section-intro">
    <p class="eyebrow">{{ t(eyebrow) }}</p>
    <h2>{{ t(title) }}</h2>
    <p v-if="description" class="section-description">{{ t(description) }}</p>
    <slot />
  </div>
</template>
