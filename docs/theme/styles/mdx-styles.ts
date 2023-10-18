import { CSSUIObject } from '@yamada-ui/react'

export const mdx: Record<string, CSSUIObject> = {
  h1: {
    mt: '12',
    mb: '6',
    fontSize: { base: '4xl' },
  },
  h2: {
    mt: '12',
    mb: '6',
    fontSize: { base: '2xl' },
  },
  h3: {
    mt: '8',
    mb: '6',
    fontSize: { base: 'xl' },
  },
  h4: {
    mt: '8',
    mb: '6',
    fontSize: { base: 'lg' },
  },
  h5: {
    my: '6',
    fontSize: { base: 'md' },
  },
  h6: {
    my: '6',
    fontSize: { base: 'sm' },
  },
  p: {
    my: '6',
    lineHeight: 'tall',
    'blockquote &': {
      mt: '0',
    },
  },
  strong: {
    fontWeight: 'semibold',
  },
  code: {
    fontFamily: 'body',
    color: ['violet.600', 'purple.300'],
  },
  a: {
    color: 'link',
    code: {
      color: 'inherit !important',
    },
  },
  hr: {
    my: '8',
  },
  ul: {
    my: '6',
    gap: '3',
    '& ul,ol': {
      mt: '2',
      mb: '0',
    },
  },
  ol: {
    my: '6',
    gap: '3',
    '& ul,ol': {
      mt: '2',
      mb: '0',
    },
  },
  li: {
    '& > p': { my: '0' },
  },
  'table-container': {
    my: '6',
    th: {
      fontFamily: 'body',
      fontWeight: 'semibold',
      textTransform: 'none',
      letterSpacing: 'normal',
    },
    td: {
      whiteSpace: 'normal',
    },
  },
  table: {
    w: 'full',
  },
  alert: {
    my: '6',
    '& p': { my: '0' },
  },
}
