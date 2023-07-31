import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkEmoji from 'remark-emoji'
import remarkGfm from 'remark-gfm'
import remarkSlug from 'remark-slug'
import { CONSTANT } from './constant'
import { omitLocaleSlug, getTableOfContents, rehypeMdxCodeMeta, getLocale } from './utils'

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: ({ _raw }) => `/${omitLocaleSlug(_raw.flattenedPath)}`,
  },
}

const GettingStarted = defineDocumentType(() => ({
  name: 'GettingStarted',
  filePathPattern: 'getting-started/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    name: { type: 'string' },
    dir: { type: 'string' },
    hidden: { type: 'boolean', default: false },
    category: { type: 'string' },
  },
  computedFields: {
    ...computedFields,
    frontMatter: {
      type: 'json',
      resolve: ({ _id, _raw, body, ...rest }) => ({
        ...rest,
        locale: getLocale(_raw.flattenedPath),
        slug: omitLocaleSlug(_raw.flattenedPath),
        editUrl: `${CONSTANT.SNS.GITHUB.EDIT_URL}/${_id}`,
        headings: getTableOfContents(body.raw),
      }),
    },
  },
}))

const StyledSystem = defineDocumentType(() => ({
  name: 'StyledSystem',
  filePathPattern: 'styled-system/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    category: { type: 'string' },
  },
  computedFields: {
    ...computedFields,
    frontMatter: {
      type: 'json',
      resolve: ({ _id, _raw, body, ...rest }) => ({
        ...rest,
        locale: getLocale(_raw.flattenedPath),
        slug: omitLocaleSlug(_raw.flattenedPath),
        editUrl: `${CONSTANT.SNS.GITHUB.EDIT_URL}/${_id}`,
        headings: getTableOfContents(body.raw),
      }),
    },
  },
}))

export default makeSource({
  contentDirPath: 'contents',
  documentTypes: [GettingStarted, StyledSystem],
  mdx: {
    rehypePlugins: [rehypeMdxCodeMeta],
    remarkPlugins: [remarkSlug, remarkGfm, remarkEmoji],
  },
})
