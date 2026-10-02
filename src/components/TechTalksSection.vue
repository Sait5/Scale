<script setup lang="ts">
import { t } from '../i18n'
import { ref } from 'vue'
const emit = defineEmits<{ talk: [title: string, author: string] }>()
const track = ref<HTMLElement>()
const talks = [
  { title: 'Navigating an AI-Enabled Future', author: 'Eric Schmidt', image: 'eric-schmidt.png' },
  { title: 'Understanding & Interacting With The…', author: 'Fei Fei Li', image: 'fei-fei-li.png' },
  { title: 'Building AI-Native Products & What’s', author: 'Nat Friedman', image: 'nat-friedman.png' },
]
function move(direction: number) { track.value?.scrollBy({ left: direction * 500, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }) }
</script>

<template>
  <section id="tech-talks" class="tech-talks" aria-label="Tech Talks">
    <div ref="track" class="talk-track">
      <button v-for="talk in talks" :key="talk.author" type="button" class="talk-card" @click="emit('talk', talk.title, talk.author)">
        <img :src="`/assets/${talk.image}`" :alt="talk.author" width="190" height="190" />
        <div class="talk-copy"><span class="talk-label">{{ t("Tech Talk") }}</span><h2>{{ t(talk.title) }}</h2><p>{{ t('by') }} {{ talk.author }}</p></div>
        <span class="play" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="m7 4 9 6-9 6z" fill="currentColor" /></svg></span>
      </button>
    </div>
    <div class="carousel-controls"><button type="button" aria-label="Previous talks" @click="move(-1)">←</button><button type="button" aria-label="Next talks" @click="move(1)">→</button></div>
  </section>
</template>
