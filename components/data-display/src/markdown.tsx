import {
  ui,
  forwardRef,
  HTMLUIProps,
  omitThemeProps,
  ThemeProps,
  useComponentStyle,
  ColorSchemeArray,
  useValue,
} from '@yamada-ui/system'
import { cx, filterEmpty } from '@yamada-ui/utils'
import { ComponentPropsWithoutRef, CSSProperties, FC } from 'react'
import ReactMarkdown from 'react-markdown'
import {
  CodeProps,
  HeadingProps,
  LiProps,
  OrderedListProps,
  TableCellProps,
  TableRowProps,
  UnorderedListProps,
} from 'react-markdown/lib/ast-to-react'
import { ReactMarkdownProps } from 'react-markdown/lib/complex-types'
import { ReactMarkdownOptions } from 'react-markdown/lib/react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  coy,
  dark,
  funky,
  okaidia,
  solarizedlight,
  tomorrow,
  twilight,
  prism,
  a11yDark,
  atomDark,
  base16AteliersulphurpoolLight,
  cb,
  coldarkCold,
  coldarkDark,
  darcula,
  dracula,
  duotoneDark,
  duotoneEarth,
  duotoneForest,
  duotoneLight,
  duotoneSea,
  duotoneSpace,
  ghcolors,
  gruvboxDark,
  gruvboxLight,
  hopscotch,
  materialDark,
  materialLight,
  materialOceanic,
  nord,
  oneDark,
  oneLight,
  pojoaque,
  shadesOfPurple,
  synthwave84,
  vs,
  vscDarkPlus,
  xonokai,
} from 'react-syntax-highlighter/dist/esm/styles/prism'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

type CodeTheme =
  | 'coy'
  | 'dark'
  | 'funky'
  | 'okaidia'
  | 'solarizedlight'
  | 'tomorrow'
  | 'twilight'
  | 'prism'
  | 'a11yDark'
  | 'atomDark'
  | 'base16AteliersulphurpoolLight'
  | 'cb'
  | 'coldarkCold'
  | 'coldarkDark'
  | 'darcula'
  | 'dracula'
  | 'duotoneDark'
  | 'duotoneEarth'
  | 'duotoneForest'
  | 'duotoneLight'
  | 'duotoneSea'
  | 'duotoneSpace'
  | 'ghcolors'
  | 'gruvboxDark'
  | 'gruvboxLight'
  | 'hopscotch'
  | 'materialDark'
  | 'materialLight'
  | 'materialOceanic'
  | 'nord'
  | 'oneDark'
  | 'oneLight'
  | 'pojoaque'
  | 'shadesOfPurple'
  | 'synthwave84'
  | 'vs'
  | 'vscDarkPlus'
  | 'xonokai'

export type MarkdownComponentProps<Y extends keyof JSX.IntrinsicElements> =
  ComponentPropsWithoutRef<Y> & ReactMarkdownProps
export type MarkdownComponentCodeProps = CodeProps
export type MarkdownComponentHeadingProps = HeadingProps
export type MarkdownComponentLiProps = LiProps
export type MarkdownComponentOrderedListProps = OrderedListProps
export type MarkdownComponentTableCellProps = TableCellProps
export type MarkdownComponentTableRowProps = TableRowProps
export type MarkdownComponentUnorderedListProps = UnorderedListProps

type MarkdownOptions = ReactMarkdownOptions & {
  code?: { theme?: CodeTheme | ColorSchemeArray<CodeTheme> }
}

export type MarkdownProps = Omit<HTMLUIProps<'div'>, 'children'> &
  ThemeProps<'Markdown'> &
  MarkdownOptions

export const Markdown = forwardRef<MarkdownProps, 'div'>((props, ref) => {
  const css = useComponentStyle('Markdown', props)
  let {
    className,
    remarkPlugins,
    rehypePlugins,
    linkTarget = '_blank',
    components,
    code,
    ...rest
  } = omitThemeProps(props)

  remarkPlugins = [remarkGfm, ...filterEmpty(remarkPlugins ?? [])]
  rehypePlugins = [rehypeRaw, ...filterEmpty(rehypePlugins ?? [])]
  components = {
    code: (props: CodeProps) => <Code {...code} {...props} />,
    ...components,
  }

  return (
    <ui.div
      as={ReactMarkdown}
      ref={ref}
      className={cx('ui-markdown', className)}
      remarkPlugins={remarkPlugins}
      rehypePlugins={rehypePlugins}
      components={components}
      linkTarget={linkTarget}
      __css={css}
      {...rest}
    />
  )
})

const getTheme = (theme: CodeTheme) => {
  switch (theme) {
    case 'coy':
      return coy
    case 'dark':
      return dark
    case 'funky':
      return funky
    case 'okaidia':
      return okaidia
    case 'solarizedlight':
      return solarizedlight
    case 'tomorrow':
      return tomorrow
    case 'twilight':
      return twilight
    case 'prism':
      return prism
    case 'a11yDark':
      return a11yDark
    case 'atomDark':
      return atomDark
    case 'base16AteliersulphurpoolLight':
      return base16AteliersulphurpoolLight
    case 'cb':
      return cb
    case 'coldarkCold':
      return coldarkCold
    case 'coldarkDark':
      return coldarkDark
    case 'darcula':
      return darcula
    case 'dracula':
      return dracula
    case 'duotoneDark':
      return duotoneDark
    case 'duotoneEarth':
      return duotoneEarth
    case 'duotoneForest':
      return duotoneForest
    case 'duotoneLight':
      return duotoneLight
    case 'duotoneSea':
      return duotoneSea
    case 'duotoneSpace':
      return duotoneSpace
    case 'ghcolors':
      return ghcolors
    case 'gruvboxDark':
      return gruvboxDark
    case 'gruvboxLight':
      return gruvboxLight
    case 'hopscotch':
      return hopscotch
    case 'materialDark':
      return materialDark
    case 'materialLight':
      return materialLight
    case 'materialOceanic':
      return materialOceanic
    case 'nord':
      return nord
    case 'oneDark':
      return oneDark
    case 'oneLight':
      return oneLight
    case 'pojoaque':
      return pojoaque
    case 'shadesOfPurple':
      return shadesOfPurple
    case 'synthwave84':
      return synthwave84
    case 'vs':
      return vs
    case 'vscDarkPlus':
      return vscDarkPlus
    case 'xonokai':
      return xonokai
    default:
      return undefined
  }
}

const Code: FC<MarkdownComponentCodeProps & MarkdownOptions['code']> = ({
  inline,
  className,
  children,
  theme = 'oneDark',
}) => {
  if (inline) return <ui.code className={cx('ui-markdown-code', className)}>{children}</ui.code>

  theme = useValue(theme)

  const style: CSSProperties = { ...getTheme(theme) }

  const language = className?.replace(/language-/, '')

  return (
    <ui.pre
      as={SyntaxHighlighter}
      className={cx('ui-markdown-code', className)}
      language={language}
      style={style}
    >
      {String(children).replace(/\n$/, '')}
    </ui.pre>
  )
}
