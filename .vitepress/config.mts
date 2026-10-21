import { defineConfig } from 'vitepress'
import lootengineCode from './lootengine-code.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",

  title: "LootEngine",
  description: "The visual editor for your DayZ loot economy",

  // Flare & Field is dark by design; light mode stays available from the switch
  appearance: 'dark',

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#0a0c0b' }]
  ],

  markdown: {
    theme: { light: lootengineCode, dark: lootengineCode }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/lootengine-lockup-colour-light-bg.svg',
      dark: '/lootengine-lockup-colour-dark-bg.svg',
      alt: 'LootEngine'
    },
    siteTitle: false,

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/N2tYjZuNNV' }
    ],

    footer: {
      message: 'LootEngine is an independent tool, not affiliated with or endorsed by Bohemia Interactive. DayZ is a trademark of Bohemia Interactive a.s.',
      copyright: 'LootEngine and the LootEngine emblem are owned by Baker Software.'
    }
  }
})
