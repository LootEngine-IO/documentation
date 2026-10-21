// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import '@fontsource-variable/space-grotesk'
import '@fontsource-variable/jetbrains-mono'
import './tokens.css'
import './vars.css'
import './components.css'
import HomeBackdrop from './components/HomeBackdrop.vue'
import HomeHeroChip from './components/HomeHeroChip.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'home-hero-before': () => h(HomeBackdrop),
      'home-hero-info-before': () => h(HomeHeroChip)
    })
  }
} satisfies Theme
