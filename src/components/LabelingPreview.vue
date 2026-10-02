<script setup lang="ts">
import { t } from '../i18n'
defineProps<{ active: string }>()
</script>

<template>
  <div id="labeling-preview" class="labeling-preview" role="tabpanel" :aria-labelledby="`label-tab-${active}`" tabindex="0">
    <img v-if="active === '3D'" src="/assets/lidar.png" width="647" height="400" alt="LiDAR point cloud with yellow bounding boxes around detected vehicles" />
    <div v-else-if="active === 'Image'" class="image-preview"><img src="/assets/data-curation.png" alt="Dataset images with annotated object bounding boxes" /><span class="preview-caption">{{ t("Image annotation · object detection") }}</span></div>
    <svg v-else-if="active === 'Mapping'" viewBox="0 0 647 400" role="img" aria-label="Demonstration of road mapping and lane annotation"><defs><pattern id="map-grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="#242229" /></pattern></defs><rect width="647" height="400" fill="#0b090d"/><rect width="647" height="400" fill="url(#map-grid)"/><path d="M-20 340Q220 290 230 170T680 70" stroke="#292631" fill="none" stroke-width="85"/><path d="M-20 340Q220 290 230 170T680 70" stroke="#bdda50" fill="none" stroke-width="2" stroke-dasharray="12 10"/><path d="M-20 315Q194 271 204 167T680 45M-20 365Q246 315 255 170T680 95" stroke="#a997e1" fill="none" stroke-width="2"/><g fill="#a997e1"><circle cx="209" cy="152" r="5"/><circle cx="328" cy="77" r="5"/><circle cx="109" cy="298" r="5"/></g><text x="28" y="36" fill="#aaa2bb" font-size="13" font-family="Arial">{{ t("MAPPING · LANE SEGMENTATION") }}</text></svg>
    <div v-else-if="active === 'Text'" class="text-preview"><span class="preview-caption">{{ t("Text annotation · named entities") }}</span><p><mark class="entity-purple">{{ t("Scale") }}</mark>{{ t("helps teams build better") }}<mark class="entity-green">{{ t("AI models") }}</mark>{{ t("with high-quality data.") }}</p><div class="entity-key"><span>{{ t("Organization") }}</span><span>{{ t("Technology") }}</span></div></div>
    <div v-else class="audio-preview"><span class="preview-caption">{{ t("Audio annotation · transcription") }}</span><div class="waveform"><i v-for="n in 60" :key="n" :style="{ height: `${12 + ((n * 23) % 75)}%` }" /></div><p>00:00 ──────────────────── 00:12</p><p>{{ t("High-quality data. Better performing models.") }}</p></div>
  </div>
</template>
