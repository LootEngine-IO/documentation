<script setup lang="ts">
// Contour lines from the lootengine.io hero, a nod to Chernarus survey maps.
// Inlined so the stroke colours can follow the light/dark appearance.
import contours from '../assets/contours.svg?raw'
</script>

<template>
  <div class="HomeBackdrop" aria-hidden="true">
    <div class="glow" />
    <div class="contours" v-html="contours" />
    <div class="grain" />
    <div class="fade" />
  </div>
</template>

<style scoped>
.HomeBackdrop {
  position: absolute;
  inset: calc((var(--vp-nav-height) + var(--vp-layout-top-height, 0px)) * -1) 0 auto;
  z-index: -1;
  height: min(1100px, 100vh + 12rem);
  overflow: clip;
  pointer-events: none;
}

.glow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(42% 52% at 72% 42%, var(--le-glow), transparent 70%),
    radial-gradient(30% 34% at 10% 88%, var(--le-glow-field), transparent 70%);
}

.contours {
  position: absolute;
  inset: 0;
  mask-image: radial-gradient(80% 85% at 68% 38%, #000 25%, transparent 80%);
}

.contours :deep(svg) {
  width: 100%;
  height: 100%;
}

.contours :deep(path) {
  fill: none;
  stroke: var(--le-contour);
  stroke-width: 1;
  vector-effect: non-scaling-stroke;
}

.contours :deep(path.i) {
  stroke: var(--le-contour-index);
  stroke-width: 1.25;
}

@media (prefers-reduced-motion: no-preference) {
  .contours :deep(path) {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation: draw 2.6s var(--le-ease-out-quart) forwards;
  }
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

/* Fine noise so the glow doesn't band on large dark fields */
.grain {
  position: absolute;
  inset: 0;
  opacity: 0.05;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

.fade {
  position: absolute;
  inset: auto 0 0;
  height: 35%;
  background: linear-gradient(transparent, var(--vp-c-bg));
}
</style>
