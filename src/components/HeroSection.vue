<script setup lang="ts">
import { t } from '../i18n'
import ActionButton from './ActionButton.vue'
import OrbArt from './OrbArt.vue'
import GovernmentLogos from './GovernmentLogos.vue'
defineEmits<{ demo: [] }>()
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero-stage">
      <OrbArt />
      <div class="hero-content">
        <h1 id="hero-title">{{ t("Power") }} <span class="gradient-text">{{ t("Generative AI") }}</span><br />{{ t("With Your Data") }}</h1>
        <p>{{ t("Make the best models with the best data. Scale Data Engine leverages your enterprise data,") }} <br class="desktop-break" />{{ t("and with Scale GenAI Platform, safely unlocks the value of AI.") }}</p>
        <div class="actions"><ActionButton @click="$emit('demo')">{{ t("Book a Demo") }}</ActionButton><ActionButton href="#data-engine" plain>{{ t("Build AI") }}</ActionButton></div>
      </div>
    </div>
    <div class="hero-partners content-width">
      <p>{{ t("Scale works with Generative AI Companies,") }} <a href="#applications">{{ t("U.S. Government Agencies") }}</a> {{ t("& Enterprises") }}</p>
      <GovernmentLogos />
    </div>
  </section>
</template>
