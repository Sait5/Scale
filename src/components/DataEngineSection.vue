<script setup lang="ts">
import { t } from '../i18n'
import { ref } from 'vue'
import SectionIntro from './SectionIntro.vue'
import ActionButton from './ActionButton.vue'
import TextGenerator from './TextGenerator.vue'
import LabelingPreview from './LabelingPreview.vue'
defineEmits<{ demo: [] }>()
const activeTab = ref('3D')
const tabs = ['3D', 'Image', 'Mapping', 'Text', 'Audio']
function changeTab(event: KeyboardEvent, index: number) {
  let next = index
  if (event.key === 'ArrowRight') next = (index + 1) % tabs.length
  else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length
  else if (event.key === 'Home') next = 0
  else if (event.key === 'End') next = tabs.length - 1
  else return
  event.preventDefault()
  activeTab.value = tabs[next]!
  document.getElementById(`label-tab-${activeTab.value}`)?.focus()
}
</script>

<template>
  <section id="data-engine" class="data-engine section-pad" aria-label="Scale Data Engine">
    <div class="content-width">
      <SectionIntro eyebrow="BUILD AI" title="Scale Data Engine" description="For AI teams, Scale Data Engine improves your models by improving your data." />
      <div class="product-panels">
        <article class="product-panel product-panel--rlhf">
          <div class="product-visual"><TextGenerator /></div>
          <div class="product-copy"><h3>{{ t("RLHF") }}</h3><p class="product-subtitle">{{ t("Powering the next generation of Generative AI") }}</p><p>{{ t("Scale Generative AI Data Engine powers the most advanced LLMs and generative models in the world through world-class RLHF, data generation, model evaluation, safety, and alignment.") }}</p><ActionButton @click="$emit('demo')">{{ t("Label My Data") }}</ActionButton></div>
        </article>
        <article class="product-panel product-panel--labeling">
          <div class="product-copy"><h3>{{ t("Data Labeling") }}</h3><p class="product-subtitle">{{ t("The best quality data to fuel the best performing models") }}</p>
            <div class="label-tabs" role="tablist" aria-label="Data labeling types"><button v-for="(type, index) in tabs" :id="`label-tab-${type}`" :key="type" type="button" role="tab" :aria-selected="activeTab === type" aria-controls="labeling-preview" :tabindex="activeTab === type ? 0 : -1" @click="activeTab = type" @keydown="changeTab($event, index)">{{ t(type) }}</button></div>
            <p>{{ t("Scale has pioneered in the data labeling industry by combining AI-based techniques with human-in-the-loop, delivering labeled data at unprecedented quality, scalability, and efficiency.") }}</p><ActionButton @click="$emit('demo')">{{ t("Label My Data") }}</ActionButton>
          </div>
          <div class="product-visual"><LabelingPreview :active="activeTab" /></div>
        </article>
        <article class="product-panel product-panel--curation">
          <div class="product-visual curation-visual"><img src="/assets/data-curation.png" width="630" height="420" alt="Scale Nucleus dataset dashboard showing MS COCO image annotations, statistics, and object class distribution" loading="lazy" /></div>
          <div class="product-copy"><h3>{{ t("Data Curation") }}</h3><p class="product-subtitle">{{ t("Unearth the most valuable data by intelligently managing your dataset") }}</p><p>{{ t("Scale’s suite of dataset management, testing, model evaluation, and model comparison tools enable you to “label what matters.” Maximize the value of your labeling budget by identifying the highest value data to label, even without ground truth labels.") }}</p><ActionButton @click="$emit('demo')">{{ t("Curate My Data") }}</ActionButton></div>
        </article>
      </div>
    </div>
  </section>
</template>
