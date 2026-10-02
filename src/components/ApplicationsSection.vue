<script setup lang="ts">
import { t } from '../i18n'
import SectionIntro from './SectionIntro.vue'
defineEmits<{ demo: [] }>()
const applications = [
  { label: 'Scale Donovan', title: 'AI-Powered Decision-Making for Defense', text: 'AI-powered decision-making support: plan, analyze, and act in minutes.', image: 'donovan.png', alt: 'Scale Donovan intelligence chat alongside a geographic map' },
  { label: 'Scale Enterprise GenAI Platform', title: 'AI for the Enterprise', text: 'Transform your data into customized enterprise-ready Generative AI applications.', image: 'enterprise.png', alt: 'Scale Enterprise GenAI platform showing partner, open source, and customized models' },
]
</script>

<template>
  <section id="applications" class="applications section-pad" aria-label="Generative AI Applications">
    <div class="content-width">
      <SectionIntro eyebrow="APPLY AI" title="Generative AI Applications" description="Easily Apply AI to your most challenging use cases with pre-built applications that harness the power of customized LLMs." />
      <div class="application-grid"><button v-for="app in applications" :key="app.label" type="button" class="application-card" :class="{ 'defense-card': app.image === 'donovan.png' }" @click="$emit('demo')"><div class="application-copy"><p class="eyebrow">{{ app.label }}</p><h3>{{ t(app.title) }}</h3><p>{{ t(app.text) }}</p></div><img :src="`/assets/${app.image}`" :alt="app.alt" width="620" height="320" loading="lazy" /><span v-if="app.image === 'donovan.png'" class="defense-point" aria-hidden="true" /></button></div>
    </div>
  </section>
</template>
