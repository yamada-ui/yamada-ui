import { GetStaticPathsContext, GetStaticPropsContext } from 'next'
import { toArray } from './array'
import { toKebabCase } from './assertion'
import {
  getDocumentBreadcrumbs,
  getDocument,
  getDocuments,
  getDocumentPagination,
  getPath,
  getDocumentTabs,
  getDocumentTree,
  omitDocumentTabs,
} from './contentlayer'
import { otherLocales } from './i18n'
import { DocumentData, DocumentTypeNames, allDocuments } from 'contentlayer/generated'

export const getStaticCommonProps = async ({ locale }: GetStaticPropsContext) => {
  const documents = getDocuments(locale)
  const documentTree = getDocumentTree(omitDocumentTabs(documents))()

  return { props: { documents, documentTree } }
}

export const getStaticDocumentProps =
  (documentTypeName: DocumentTypeNames) =>
  async ({ params, locale, defaultLocale }: GetStaticPropsContext) => {
    const paths = [toKebabCase(documentTypeName), ...toArray(params?.slug ?? [])]

    const documents = getDocuments(locale)
    const documentTree = getDocumentTree(omitDocumentTabs(documents))(paths)
    const document =
      getDocument(documents, paths, locale) ?? getDocument(documents, paths, defaultLocale)

    const { documentTabs, parentDocument, parentPaths } = getDocumentTabs(documents, document)
    const documentChildrenTree = getDocumentTree(documents, paths)(paths)
    const documentBreadcrumbs = getDocumentBreadcrumbs(
      documents,
      parentPaths ?? paths,
      locale,
      defaultLocale,
    )
    const documentPagination = getDocumentPagination(documentTree, parentDocument ?? document)

    return {
      props: {
        ...document,
        documents,
        documentTree,
        documentBreadcrumbs,
        documentChildrenTree,
        documentTabs,
        documentPagination,
      },
    }
  }

const OTHER_LOCALES = `(${otherLocales.join('|')})`

export const getStaticDocumentPaths =
  (documentTypeName: DocumentTypeNames) =>
  async ({ defaultLocale, locales }: GetStaticPathsContext) => {
    const prefixId = toKebabCase(documentTypeName)

    const documents = locales.flatMap((locale) =>
      allDocuments.filter(({ type, is_active, _id }) => {
        if (!is_active) return false

        if (type !== documentTypeName) return false

        if (locale === defaultLocale) {
          const isContains = new RegExp(`\.${OTHER_LOCALES}\.mdx$`).test(_id)

          return !isContains && _id.endsWith('.mdx')
        } else {
          return _id.endsWith(`.${locale}.mdx`)
        }
      }),
    )

    const reg = new RegExp(`^${prefixId}/`)

    const paths = documents
      .map(({ _id, data }) => {
        const id = _id.replace(reg, '')

        const { locale } = data as DocumentData
        const path = getPath(id)
        const params = { slug: path.split('/').filter((str) => str !== 'index') }

        const notExistLocales = otherLocales.filter((otherLocale) => {
          const otherLocaleDoc = documents.find(({ _id, data }) => {
            const id = _id.replace(reg, '')
            const { locale } = data as DocumentData
            const otherLocalePath = getPath(id)

            return path === otherLocalePath && locale === otherLocale
          })

          return !otherLocaleDoc
        })

        if (notExistLocales.length) {
          const otherPaths = notExistLocales.map((locale) => ({ params, locale }))

          return [{ params, locale }, ...otherPaths]
        } else {
          return { params, locale }
        }
      })
      .flat()

    return { paths, fallback: false }
  }
