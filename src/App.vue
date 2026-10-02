<script setup lang="ts">
import { t } from './i18n'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { setupMotion } from './motion'
let cleanup: (() => void) | undefined
onMounted(() => { cleanup = setupMotion() })
onBeforeUnmount(() => cleanup?.())
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import TechTalksSection from './components/TechTalksSection.vue'
import ArchitectureSection from './components/ArchitectureSection.vue'
import DataEngineSection from './components/DataEngineSection.vue'
import ApplicationsSection from './components/ApplicationsSection.vue'
import ResourcesSection from './components/ResourcesSection.vue'
import CustomersSection from './components/CustomersSection.vue'
import CtaSection from './components/CtaSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import DemoDialog from './components/DemoDialog.vue'
const modal = ref<InstanceType<typeof DemoDialog>>()
function demo() { modal.value?.open('demo', 'Book a Demo') }
function info(title: string) { modal.value?.open('info', title, title === 'Log In' ? 'This is a design demonstration. Login and registration are not implemented, and no credentials are requested.' : undefined) }
function talk(title: string, author: string) { modal.value?.open('info', title, t('The design includes this talk card, but no video or destination URL.') + ` · ${author}`) }
function resource(title: string, category: string) { modal.value?.open('info', title, t(category) + ' · ' + t('This preview preserves the Figma card. The article and its URL are not included in the design.')) }
</script>

<template>
  <a class="skip-link" href="#main">{{ t("Skip to content") }}</a>
  <div id="top"><SiteHeader @demo="demo" @info="info" /><main id="main"><HeroSection @demo="demo" /><TechTalksSection @talk="talk" /><ArchitectureSection @demo="demo" /><DataEngineSection @demo="demo" /><ApplicationsSection @demo="demo" /><ResourcesSection @resource="resource" /><CustomersSection /><CtaSection @demo="demo" /></main><SiteFooter @info="info" /></div>
  <DemoDialog ref="modal" />
</template>
