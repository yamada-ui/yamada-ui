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
    mt: '12',
    mb: '6',
    fontSize: { base: 'xl' },
  },
  h4: {
    mt: '8',
    mb: '6',
    fontSize: { base: 'md' },
  },
  h5: {
    mt: '8',
    mb: '6',
    fontSize: { base: 'sm' },
  },
  h6: {
    mt: '8',
    mb: '6',
    fontSize: { base: 'xs' },
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
    textDecoration: 'underline',
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
  },
  ol: {
    my: '6',
    gap: '3',
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
