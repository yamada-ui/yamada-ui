import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files'
import GithubSlugger from 'github-slugger'
import remarkEmoji from 'remark-emoji'
import remarkGfm from 'remark-gfm'
import remarkSlug from 'remark-slug'
import { Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import { CONSTANT } from './constant'
import { omitLocaleSlug, getLocale } from './utils'
import { Doc } from 'contentlayer/generated'

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: ({ _raw }) => `/docs/${omitLocaleSlug(_raw.flattenedPath)}`,
  },
}

const rehypeMdxCodeMeta: Plugin = () => (tree) => {
  visit(tree, 'element', (node: any) => {
    if (node.tagName !== 'code' || !node.data) return

    node.properties = node.properties || {}

    const props: string[] = node.data.meta.split(' ')

    props.forEach((prop) => {
      const [key, value] = prop.split('=')

      node.properties[key] = value
    })
  })
}

export const getTableOfContents = (raw: string) => {
  const slugger = new GithubSlugger()

  const regexp = new RegExp(/^(## |### |#### )(.*)\n/, 'gm')
  const contents = [...raw.matchAll(regexp)]

  if (!contents.length) return []

  return contents.map(([, lv, title]) => {
    title = title.trim()
    lv = lv.trim()

    const id = slugger.slug(title, false)

    return { id, title, lv: lv.split('#').length - 1 }
  })
}

const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: '**/*.mdx',
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
    data: {
      type: 'json',
      resolve: async ({ _id, _raw, title, body, ...rest }) => ({
        title,
        ...rest,
        locale: getLocale(_raw.flattenedPath),
        paths: omitLocaleSlug(_raw.flattenedPath).split('/'),
        editUrl: `docs/${CONSTANT.SNS.GITHUB.EDIT_URL}/${_id}`,
        contents: getTableOfContents(body.raw),
      }),
    },
  },
}))

export default makeSource({
  contentDirPath: 'contents',
  documentTypes: [Doc],
  mdx: {
    rehypePlugins: [rehypeMdxCodeMeta],
    remarkPlugins: [remarkSlug, remarkGfm, remarkEmoji],
  },
})
