import { Data, DocWithChildren, Doc } from 'contentlayer/generated'

export const getTree = (docs: Doc[], parentPaths: string[] = []): DocWithChildren[] => {
  const lv = parentPaths.length

  return docs
    .filter(({ is_active, data }) => {
      if (!is_active) return false

      let { paths } = data as Data

      paths = paths.filter(Boolean)

      return paths.length === lv + 1 && paths.join('/').startsWith(parentPaths.join('/'))
    })
    .sort((a, b) => a.order - b.order)
    .map((doc) => ({
      ...doc,
      children: getTree(docs, doc.data.paths),
    }))
}
