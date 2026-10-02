<script setup lang="ts">
import { t } from '../i18n'
import { computed, onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { language } from '../i18n'
const element = ref<HTMLElement>()
const count = ref(0)
const response = computed(() => t('Human feedback helps models learn which answers are useful, accurate, and aligned with human intent.'))
let timer: ReturnType<typeof setInterval> | undefined
let observer: IntersectionObserver | undefined
const stop = () => { if (timer) clearInterval(timer); timer = undefined }
function start() {
  stop()
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { count.value = response.value.length; return }
  timer = setInterval(() => { if (!document.hidden) count.value = Math.min(count.value + 1, response.value.length); if (count.value >= response.value.length) stop() }, 42)
}
watch(language, () => { count.value = 0; if (element.value?.classList.contains('in-view')) start() })
onMounted(() => { observer = new IntersectionObserver(([entry]) => { if (entry?.isIntersecting) start(); else stop() }); if (element.value) observer.observe(element.value) })
onBeforeUnmount(() => { stop(); observer?.disconnect() })
</script>
<template>
  <div ref="element" class="text-generator" aria-label="AI Text Generator demonstration">
    <div class="generator-toolbar"><div class="window-dots"><i /><i /><i /></div><span>{{ t("AI Text Generator") }}</span></div>
    <div class="generator-prompt"><span class="avatar">●</span><p>{{ t("Why is human feedback necessary for accurate llm responses?") }}</p></div>
    <div class="generator-response"><div class="little-orb" /><p class="typed-response" :aria-label="response"><span aria-hidden="true">{{ response.slice(0, count) }}</span><i class="typing-cursor" aria-hidden="true" /></p></div>
    <p class="generator-demo-note">{{ t('Illustrative response · not a live AI model') }}</p>
  </div>
</template>
