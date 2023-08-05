import { CSSUIObject } from '@yamada-ui/react'

export const mdx: Record<string, CSSUIObject> = {
  h1: {
    mt: '6',
    mb: '4',
    fontSize: { base: '4xl' },
  },
  h2: {
    mt: '6',
    mb: '4',
    fontSize: { base: '2xl' },
  },
  h3: {
    mt: '6',
    mb: '4',
    fontSize: { base: 'xl' },
  },
  h4: {
    mt: '6',
    mb: '4',
    fontSize: { base: 'md' },
  },
  h5: {
    mt: '6',
    mb: '4',
    fontSize: { base: 'sm' },
  },
  h6: {
    mt: '6',
    mb: '4',
    fontSize: { base: 'xs' },
  },
  p: {
    my: '4',
    'blockquote &': {
      mt: '0',
    },
  },
  strong: {
    fontWeight: 'semibold',
  },
  code: {
    color: ['red.500', 'red.300'],
  },
  a: {
    color: 'link',
    textDecoration: 'underline',
  },
  hr: {
    my: '6',
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
}
