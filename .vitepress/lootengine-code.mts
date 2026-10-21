import type { ThemeRegistration } from 'shiki'

// Syntax theme for code blocks, built from the XML colours on lootengine.io:
// gold tags, Field-green attributes, pale-green values and quiet punctuation.
// Code blocks are dark in both appearances, so one theme covers both.
const tag = '#ffc56b'
const attr = '#9bd36a'
const value = '#b8e48f'
const punctuation = '#6f7a73'
const comment = '#848e87'
const text = '#ecebe4'
const muted = '#a7afa9'
const flare = '#ffa630'
const flareSoft = '#ffd789'
const info = '#79b4ea'
const danger = '#f07b70'

export default {
  name: 'lootengine',
  displayName: 'LootEngine',
  type: 'dark',
  colors: {
    'editor.background': '#111513',
    'editor.foreground': text
  },
  tokenColors: [
    {
      scope: ['comment', 'punctuation.definition.comment', 'string.comment'],
      settings: { foreground: comment, fontStyle: 'italic' }
    },
    {
      scope: [
        'punctuation.definition.tag',
        'punctuation.separator.key-value',
        'punctuation.definition.processing-instruction',
        'meta.tag.preprocessor.xml punctuation'
      ],
      settings: { foreground: punctuation }
    },
    {
      scope: ['punctuation', 'meta.brace', 'keyword.operator'],
      settings: { foreground: muted }
    },
    {
      scope: ['entity.name.tag', 'meta.tag.sgml', 'markup.inline.raw'],
      settings: { foreground: tag }
    },
    {
      scope: [
        'entity.other.attribute-name',
        'support.type.property-name',
        'meta.object-literal.key',
        'entity.name.tag.yaml',
        'variable.other.object.property'
      ],
      settings: { foreground: attr }
    },
    {
      scope: ['string', 'punctuation.definition.string', 'string.quoted', 'string.template'],
      settings: { foreground: value }
    },
    {
      scope: ['constant.numeric', 'constant.language', 'constant.character', 'constant.other', 'support.constant'],
      settings: { foreground: flareSoft }
    },
    {
      scope: ['constant.character.escape', 'keyword.other.unit'],
      settings: { foreground: flare }
    },
    {
      scope: [
        'keyword',
        'storage',
        'storage.type',
        'storage.modifier',
        'keyword.control',
        'variable.language'
      ],
      settings: { foreground: flare }
    },
    {
      scope: [
        'entity.name.function',
        'support.function',
        'meta.function-call entity.name.function',
        'entity.name.command',
        'support.function.builtin.shell'
      ],
      settings: { foreground: info }
    },
    {
      scope: [
        'entity.name.type',
        'entity.name.class',
        'entity.other.inherited-class',
        'support.type',
        'support.class',
        'entity.name.namespace'
      ],
      settings: { foreground: tag }
    },
    {
      scope: ['variable', 'variable.other', 'meta.definition.variable', 'variable.parameter'],
      settings: { foreground: text }
    },
    {
      scope: ['entity.other.attribute-name.class.css', 'entity.other.attribute-name.id.css'],
      settings: { foreground: attr }
    },
    {
      scope: ['support.type.property-name.css', 'support.type.vendored.property-name.css'],
      settings: { foreground: info }
    },
    {
      scope: ['string.regexp'],
      settings: { foreground: danger }
    },
    {
      scope: ['markup.heading', 'markup.heading entity.name'],
      settings: { foreground: flare, fontStyle: 'bold' }
    },
    {
      scope: ['markup.bold'],
      settings: { fontStyle: 'bold' }
    },
    {
      scope: ['markup.italic'],
      settings: { fontStyle: 'italic' }
    },
    {
      scope: ['markup.underline.link', 'string.other.link'],
      settings: { foreground: info }
    },
    {
      scope: ['markup.list punctuation.definition', 'markup.quote'],
      settings: { foreground: muted }
    },
    {
      scope: ['markup.inserted', 'meta.diff.header.to-file', 'punctuation.definition.inserted'],
      settings: { foreground: attr }
    },
    {
      scope: ['markup.deleted', 'meta.diff.header.from-file', 'punctuation.definition.deleted'],
      settings: { foreground: danger }
    },
    {
      scope: ['markup.changed', 'punctuation.definition.changed'],
      settings: { foreground: flareSoft }
    },
    {
      scope: ['invalid', 'invalid.illegal'],
      settings: { foreground: danger }
    }
  ]
} satisfies ThemeRegistration
