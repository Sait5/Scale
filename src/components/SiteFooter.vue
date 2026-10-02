<script setup lang="ts">
import { t } from '../i18n'
defineEmits<{ info: [title: string] }>()
const columns = [
  { heading: 'Company', links: ['About', 'Careers', 'Security', 'Terms', 'Privacy'] },
  { heading: 'Resources', links: ['Blog', 'Customers', 'Events', 'Open Datasets', 'Documentation', 'Guides', 'Community', 'AI Readiness Report 2023'] },
  { heading: 'Guides', links: ['Data Labeling', 'ML Model Training', 'Diffusion Models', 'Guide to AI for eCommerce', 'Computer Vision Applications', 'Large Language Models'] },
]
</script>

<template>
  <footer class="site-footer"><div class="content-width"><div class="footer-grid">
    <div><h2>{{ t("Products") }}</h2><a href="#data-engine">{{ t("Scale Data Engine") }}</a><a href="#applications">{{ t("Scale GenAI Platform") }}</a><a href="#applications">{{ t("Scale Donovan") }}</a><h2 class="footer-subheading">{{ t("Government") }}</h2><button v-for="item in ['Defense','Federal','Public Sector']" :key="item" type="button" @click="$emit('info', item)">{{ t(item) }}</button></div>
    <div v-for="col in columns" :key="col.heading"><h2>{{ t(col.heading) }}</h2><template v-for="item in col.links" :key="item"><a v-if="item === 'Customers'" href="#customers">{{ t(item) }}</a><a v-else-if="['Blog','Guides','Data Labeling'].includes(item)" :href="item === 'Data Labeling' ? '#data-engine' : '#resources'">{{ t(item) }}</a><button v-else type="button" @click="$emit('info', item)">{{ t(item) }}</button></template></div>
    <div><h2>{{ t("Contact") }}</h2><a v-for="email in ['sales','support','careers','press']" :key="email" :href="`mailto:${email}@scale.com`">{{ email }}@scale.com</a><div class="socials"><a href="https://x.com/scale_ai" target="_blank" rel="noopener noreferrer" aria-label="Scale on X (opens in a new tab)">𝕏</a><a href="https://www.facebook.com/scaleai/" target="_blank" rel="noopener noreferrer" aria-label="Scale on Facebook (opens in a new tab)">{{ t("f") }}</a><a href="https://www.linkedin.com/company/scaleai/" target="_blank" rel="noopener noreferrer" aria-label="Scale on LinkedIn (opens in a new tab)">{{ t("in") }}</a></div></div>
  </div><div class="footer-bottom"><p>{{ t("Copyright © 2024 Scale AI, Inc. All rights reserved.") }}</p><button type="button" @click="$emit('info', 'Terms of Use & Privacy Policy')">{{ t("Terms of Use & Privacy Policy") }}</button></div></div></footer>
</template>
