<script setup lang="ts">
import { t } from '../i18n'
import SectionIntro from './SectionIntro.vue'
import ActionButton from './ActionButton.vue'
defineEmits<{ demo: [] }>()
const providers = ['OpenAI', 'Adept', 'Meta', 'Cohere', 'Anthropic']
const layers = [
  { title: 'Fine-Tuning and RLHF', text: 'Adapt best-in-class foundation models to your business and your specific data to build sustainable, successful AI programs and data from your enterprise.' },
  { title: 'Foundation Models', text: 'Scale partners or integrates with all of the leading AI models, from open-source to closed-source, including OpenAI, Anthropic, Google PaLM, Cohere, and more.' },
  { title: 'Enterprise Data', text: "Scale’s Data Engine enables you to integrate your enterprise data into the fold of these models, providing the base for long-term strategic differentiation." },
]
</script>

<template>
  <section id="architecture" class="architecture section-pad" aria-label="Generative AI Architecture">
    <div class="content-width">
      <SectionIntro eyebrow="AI FOR THE ENTERPRISE" title="Generative AI Architecture" description="Whether you’re building your own models or applying foundation models to your business, data remains the biggest bottleneck to AI.">
        <ActionButton @click="$emit('demo')">{{ t("Talk to a Generative AI Expert") }}</ActionButton>
      </SectionIntro>
      <div class="architecture-body">
        <div class="architecture-layers"><article v-for="layer in layers" :key="layer.title"><h3>{{ t(layer.title) }}</h3><p>{{ t(layer.text) }}</p></article></div>
        <div class="architecture-diagram"><img class="architecture-image" src="/assets/architecture.png" alt="Industry applications on a three-layer architecture: RLHF, generative AI foundation models, and Scale Data Engine" width="624" height="624" loading="lazy" /><span class="architecture-flow" aria-hidden="true" /><span class="architecture-node" aria-hidden="true" /></div>
      </div>
      <div class="providers"><p class="eyebrow">{{ t("GENERATIVE AI PROVIDERS WE PARTNER WITH:") }}</p><div class="provider-grid">
        <div v-for="provider in providers" :key="provider" class="provider"><img :src="`/assets/provider-${provider.toLowerCase()}.png`" :alt="provider" loading="lazy" /></div>
      </div></div>
    </div>
  </section>
</template>
