<script setup lang="ts">
import { t } from '../i18n'
import SectionIntro from './SectionIntro.vue'
</script>

<template>
  <section id="customers" class="customers section-pad" aria-label="Customers">
    <div class="content-width">
      <SectionIntro eyebrow="CUSTOMERS" title="We have changed the game of AI data—hear it from our customers." description="From RLHF to data labeling to model evaluation to enterprise apps, learn from experts why Scale is key to any AI strategy." />
      <figure class="testimonial"><blockquote>{{ t("“The U.S. intelligence community has spent an enormous amount of resources on collection but the sheer volume that returns is a huge problem. Scale’s LLMs are the tool that will allow the IC to finally and fully exploit all of that intelligence that has been collected.”") }}</blockquote><figcaption><strong>{{ t("Michael Burns") }}</strong><span>{{ t("Former Deputy Director of Analysis, Central Intelligence Agency") }}</span></figcaption></figure>
      <img class="customer-logo-strip" src="/assets/customer-logos.png" alt="" width="690" height="52" loading="lazy" />
    </div>
  </section>
</template>
