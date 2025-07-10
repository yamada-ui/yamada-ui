declare module "markdown-toc" {
  interface TocOptions {
    append?: string
    bullets?: string[]
    filter?: Function
    firsth1?: boolean
    maxdepth?: number
    slugify?: Function
    stripHeadingTags?: boolean
  }

  export interface TocResult {
    json: {
      content: string
      lvl: 1 | 2 | 3 | 4
      slug: string
    }[]
  }

  function toc(markdown: string, options?: TocOptions): TocResult

  export default toc
}
