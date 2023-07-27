import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkEmoji from 'remark-emoji'
import remarkGfm from 'remark-gfm'
import remarkSlug from 'remark-slug'
import { CONSTANT } from './constant'
import { getTableOfContents, rehypeMdxCodeMeta } from './utils'

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
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
    author: { type: 'string' },
    category: { type: 'string' },
  },
  computedFields: {
    ...computedFields,
    frontMatter: {
      type: 'json',
      resolve: ({ _id, _raw, body, ...rest }) => ({
        ...rest,
        slug: `/${_raw.flattenedPath}`,
        editUrl: `${CONSTANT.SNS.GITHUB.EDIT_URL}/${_id}`,
        headings: getTableOfContents(body.raw),
      }),
    },
  },
}))

export default makeSource({
  contentDirPath: 'contents',
  documentTypes: [GettingStarted],
  mdx: {
    rehypePlugins: [rehypeMdxCodeMeta],
    remarkPlugins: [remarkSlug, remarkGfm, remarkEmoji],
  },
})
