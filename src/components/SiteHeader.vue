<script setup lang="ts">
import { t } from '../i18n'
import { language, toggleLanguage } from '../i18n'
import { ref } from 'vue'
import ActionButton from './ActionButton.vue'
const emit = defineEmits<{ demo: []; info: [title: string] }>()
const open = ref(false)
const links = [ ['Products', '#data-engine'], ['Government', '#applications'], ['Customers', '#customers'], ['Resources', '#resources'] ]
</script>

<template>
  <header class="site-header" @keydown.esc="open = false">
    <div class="header-inner">
      <a href="#top" class="brand" aria-label="Scale home">{{ t("scale") }}</a>
      <button class="menu-toggle" type="button" :aria-expanded="open" aria-controls="main-navigation" @click="open = !open">{{ t(open ? 'Close' : 'Menu') }}<span aria-hidden="true">{{ open ? '×' : '☰' }}</span></button>
      <nav id="main-navigation" :class="{ 'is-open': open }" aria-label="Main navigation" @keydown.esc="open = false">
        <a v-for="[label, href] in links" :key="label" :href="href" @click="open = false">{{ t(label) }}</a>
        <div class="header-actions">
          <button class="language-toggle" type="button" @click="toggleLanguage" :aria-label="language === 'en' ? 'Перевести сайт на русский' : 'Switch website to English'">{{ language === 'en' ? 'RU' : 'EN' }}</button>
          <ActionButton @click="open = false; emit('demo')">{{ t("Book a Demo") }}</ActionButton>
          <button class="login-link" type="button" @click="open = false; emit('info', 'Log In')">{{ t("Log In") }}</button>
        </div>
      </nav>
    </div>
  </header>
</template>
