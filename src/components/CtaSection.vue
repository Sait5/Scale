<script setup lang="ts">
import { t } from '../i18n'
import ActionButton from './ActionButton.vue'
import OrbArt from './OrbArt.vue'
defineEmits<{ demo: [] }>()
</script>

<template>
  <section class="closing-cta" aria-labelledby="cta-title"><div class="cta-stage"><OrbArt compact /><div class="cta-content"><h2 id="cta-title">{{ t("The future of your") }}<br />{{ t("industry") }} <span class="gradient-text">{{ t("starts here.") }}</span></h2><div class="actions"><ActionButton @click="$emit('demo')">{{ t("Book a Demo") }}</ActionButton><ActionButton href="#data-engine" plain>{{ t("Build AI") }}</ActionButton></div></div></div></section>
</template>
