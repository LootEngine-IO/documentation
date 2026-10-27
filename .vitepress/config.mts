import { defineConfig } from 'vitepress'
import lootengineCode from './lootengine-code.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",

  // Cloudflare serves /guide/installing from guide/installing.html, so links
  // drop the .html (see wrangler.jsonc)
  cleanUrls: true,

  title: "LootEngine Documentation",
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
      { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
      { text: 'Reference', link: '/reference/fields', activeMatch: '/reference/' },
      { text: 'Help', link: '/help/troubleshooting', activeMatch: '/help/' },
      { text: 'Download', link: 'https://lootengine.io/download' },
      { text: 'lootengine.io', link: 'https://lootengine.io' }
    ],

    sidebar: [
      {
        text: 'Getting started',
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Installing LootEngine', link: '/guide/installing' },
          { text: 'First-time setup', link: '/guide/setup' },
          { text: 'Loading a mission folder', link: '/guide/missions' },
          { text: 'A tour of the editor', link: '/guide/tour' }
        ]
      },
      {
        text: 'Editing loot',
        items: [
          { text: 'Finding items', link: '/guide/finding-items' },
          { text: 'Editing loot items', link: '/guide/editing-items' },
          { text: 'Adding and removing items', link: '/guide/adding-items' },
          { text: 'Checking for problems', link: '/guide/problems' },
          { text: 'Saving your changes', link: '/guide/saving' },
          { text: 'Restoring from a backup', link: '/guide/backups' }
        ]
      },
      {
        text: 'Mods and loadouts',
        items: [
          { text: 'Loading mods', link: '/guide/mods' },
          { text: 'Loadout editor', link: '/guide/loadout-editor' }
        ]
      },
      {
        text: 'The app',
        items: [
          { text: 'Updating LootEngine', link: '/guide/updating' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Loot fields', link: '/reference/fields' },
          { text: 'Keyboard shortcuts', link: '/reference/shortcuts' },
          { text: 'Files and folders', link: '/reference/files' }
        ]
      },
      {
        text: 'Help',
        items: [
          { text: 'Troubleshooting', link: '/help/troubleshooting' },
          { text: 'Support', link: '/help/support' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3]
    },

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/N2tYjZuNNV' }
    ],

    footer: {
      message: 'LootEngine is an independent tool, not affiliated with or endorsed by Bohemia Interactive. DayZ is a trademark of Bohemia Interactive a.s.',
      copyright: 'LootEngine and the LootEngine emblem are owned by Baker Software.'
    }
  },

  // Reads each page's last git commit time. The sitemap uses it for <lastmod>,
  // and the default theme shows it as "Last updated" under each page
  lastUpdated: true,

  sitemap: {
    hostname: 'https://docs.lootengine.io',
  }
})
