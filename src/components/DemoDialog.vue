<script setup lang="ts">
import { t } from '../i18n'
import { nextTick, onBeforeUnmount, ref } from 'vue'
import ActionButton from './ActionButton.vue'
const dialog = ref<HTMLDialogElement>()
const kind = ref<'demo' | 'info'>('demo')
const title = ref('Book a Demo')
const detail = ref('')
const submitted = ref(false)
const errors = ref<Record<string, string>>({})
const name = ref('')
const email = ref('')
const company = ref('')
let previousFocus: HTMLElement | null = null
async function open(nextKind: 'demo' | 'info', nextTitle: string, nextDetail = '') {
  kind.value = nextKind; title.value = nextTitle; detail.value = nextDetail
  submitted.value = false; errors.value = {}; name.value = ''; email.value = ''; company.value = ''
  previousFocus = document.activeElement as HTMLElement
  await nextTick(); dialog.value?.showModal(); document.body.classList.add('dialog-open')
}
function close() { dialog.value?.close() }
function restoreFocus() { document.body.classList.remove('dialog-open'); previousFocus?.focus() }
async function submit() {
  const next: Record<string, string> = {}
  if (name.value.trim().length < 2) next.name = 'Enter your name (at least 2 characters).'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) next.email = 'Enter a valid email address.'
  if (company.value.trim().length < 2) next.company = 'Enter your company name.'
  errors.value = next
  await nextTick()
  if (Object.keys(next).length) document.getElementById(`demo-${Object.keys(next)[0]}`)?.focus()
  else { submitted.value = true; await nextTick(); document.getElementById('demo-success')?.focus() }
}
onBeforeUnmount(() => document.body.classList.remove('dialog-open'))
defineExpose({ open })
</script>

<template>
  <dialog ref="dialog" class="demo-dialog" aria-labelledby="dialog-title" @close="restoreFocus" @click="($event.target === dialog) && close()">
    <div class="dialog-content"><button class="dialog-close" type="button" aria-label="Close dialog" @click="close">×</button><p class="eyebrow">{{ t("SCALE · WEBSITE DEMONSTRATION") }}</p><h2 id="dialog-title">{{ t(title) }}</h2>
      <template v-if="kind === 'demo'">
        <div v-if="submitted" id="demo-success" tabindex="-1" class="demo-success" role="status"><span aria-hidden="true">✓</span><h3>{{ t("Demo request validated") }}</h3><p>{{ t("This is a frontend demonstration. Your information has not been sent or saved. No meeting has been booked.") }}</p><ActionButton @click="close">{{ t("Back to the website") }}</ActionButton></div>
        <form v-else novalidate @submit.prevent="submit"><p class="dialog-description">{{ t("Explore what a Scale AI demo request would look like. This form validates locally and does not send or save your information.") }}</p>
          <label for="demo-name">{{ t("Full name") }}</label><input id="demo-name" v-model="name" name="name" autocomplete="name" required maxlength="120" :aria-invalid="!!errors.name" :aria-describedby="errors.name ? 'error-name' : undefined" /><p v-if="errors.name" id="error-name" class="field-error">{{ t(errors.name) }}</p>
          <label for="demo-email">{{ t("Work email") }}</label><input id="demo-email" v-model="email" type="email" name="email" autocomplete="email" required maxlength="254" :aria-invalid="!!errors.email" :aria-describedby="errors.email ? 'error-email' : undefined" /><p v-if="errors.email" id="error-email" class="field-error">{{ t(errors.email) }}</p>
          <label for="demo-company">{{ t("Company") }}</label><input id="demo-company" v-model="company" name="company" autocomplete="organization" required maxlength="120" :aria-invalid="!!errors.company" :aria-describedby="errors.company ? 'error-company' : undefined" /><p v-if="errors.company" id="error-company" class="field-error">{{ t(errors.company) }}</p>
          <button class="action form-submit" type="submit">{{ t("Validate demo request") }}<span aria-hidden="true">→</span></button>
        </form>
      </template>
      <template v-else><p class="dialog-description">{{ t(detail || 'This standalone frontend reproduces the Figma design. This page is not part of the supplied landing-page design.') }}</p><p class="dialog-note">{{ t("No account, authentication, video player, or external integration is simulated. You can visit Scale’s official website for current information.") }}</p><a class="action" href="https://scale.com" target="_blank" rel="noopener noreferrer">{{ t("Visit scale.com") }}<span aria-hidden="true">↗</span></a></template>
    </div>
  </dialog>
</template>
