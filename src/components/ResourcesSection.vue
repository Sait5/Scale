<script setup lang="ts">
import { t } from '../i18n'
import SectionIntro from './SectionIntro.vue'
defineEmits<{ resource: [title: string, category: string] }>()
const resources = [
  { category: 'Blog', title: 'Why Is ChatGPT So Good?', image: 'chatgpt-resource.png' },
  { category: 'Guide', title: 'Guide to Data Annotation', image: 'annotation-resource.png' },
  { category: 'Customer Case Study', title: 'Goodcall', image: 'goodcall-resource.png' },
]
</script>

<template>
  <section id="resources" class="resources section-pad" aria-label="Case Studies and Resources">
    <div class="content-width">
      <SectionIntro eyebrow="LEARN HOW WE SERVE ENTERPRISES LARGE AND SMALL" title="Case Studies & Resources" description="We've worked with the world's leading AI teams for years, and delivered more high-quality data than anybody else." />
      <div class="resource-grid"><button v-for="resource in resources" :key="resource.title" type="button" class="resource-card" @click="$emit('resource', resource.title, resource.category)"><div class="resource-image"><img :src="`/assets/${resource.image}`" alt="" width="384" height="240" loading="lazy" /></div><p>{{ t(resource.category) }}</p><h3>{{ t(resource.title) }}</h3></button></div>
    </div>
  </section>
</template>
