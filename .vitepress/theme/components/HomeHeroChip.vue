<script setup lang="ts">
// Renders `hero.chip` from the home page frontmatter as a status chip above the heading.
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <p v-if="frontmatter.hero?.chip" class="HomeHeroChip">
    <span class="dot" aria-hidden="true">
      <span class="ping" />
    </span>
    {{ frontmatter.hero.chip }}
  </p>
</template>

<style scoped>
.HomeHeroChip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 1.5rem;
  padding: 0.4rem 0.8rem;
  border: 1px solid var(--le-flare-edge);
  border-radius: 999px;
  background: var(--le-flare-wash);
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1.3;
  color: var(--vp-c-brand-1);
}

.dark .HomeHeroChip {
  color: var(--le-flare-soft);
}

.dot,
.ping {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: var(--le-flare);
}

.dot {
  position: relative;
  flex: none;
}

.ping {
  position: absolute;
  inset: 0;
  opacity: 0;
}

@media (prefers-reduced-motion: no-preference) {
  .ping {
    animation: ping 1.6s cubic-bezier(0, 0, 0.2, 1) 3;
  }
}

@keyframes ping {
  0% {
    opacity: 0.7;
    transform: scale(1);
  }
  75%,
  100% {
    opacity: 0;
    transform: scale(2.4);
  }
}
</style>
