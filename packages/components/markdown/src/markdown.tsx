import {
  ui,
  forwardRef,
  HTMLUIProps,
  omitThemeProps,
  ThemeProps,
  useComponentStyle,
  ColorModeArray,
} from '@yamada-ui/core'
import { useValue } from '@yamada-ui/use-value'
import { cx, filterEmpty } from '@yamada-ui/utils'
import { ComponentPropsWithoutRef, FC } from 'react'
import ReactMarkdown from 'react-markdown'
import {
  CodeProps,
  HeadingProps,
  LiProps,
  OrderedListProps,
  TableDataCellProps,
  TableRowProps,
  UnorderedListProps,
} from 'react-markdown/lib/ast-to-react'
import { ReactMarkdownProps } from 'react-markdown/lib/complex-types'
import { ReactMarkdownOptions } from 'react-markdown/lib/react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import * as styles from 'react-syntax-highlighter/dist/cjs/styles/prism'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

type CodeTheme = keyof typeof styles

export type MarkdownComponentProps<Y extends keyof JSX.IntrinsicElements> =
  ComponentPropsWithoutRef<Y> & ReactMarkdownProps
export type MarkdownComponentCodeProps = CodeProps
export type MarkdownComponentHeadingProps = HeadingProps
export type MarkdownComponentLiProps = LiProps
export type MarkdownComponentOrderedListProps = OrderedListProps
export type MarkdownComponentUnorderedListProps = UnorderedListProps
export type MarkdownComponentTableCellProps = TableDataCellProps
export type MarkdownComponentTableRowProps = TableRowProps

type MarkdownOptions = ReactMarkdownOptions & {
  /**
   * If provided, this will set the theme for the code.
   */
  code?: { theme?: CodeTheme | ColorModeArray<CodeTheme> }
}

export type MarkdownProps = Omit<HTMLUIProps<'div'>, 'children'> &
  ThemeProps<'Markdown'> &
  MarkdownOptions

export const Markdown = forwardRef<MarkdownProps, 'div'>((props, ref) => {
  const [css, mergedProps] = useComponentStyle('Markdown', props)
  let {
    className,
    remarkPlugins,
    rehypePlugins,
    linkTarget = '_blank',
    components,
    code,
    ...rest
  } = omitThemeProps(mergedProps)

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

const Code: FC<MarkdownComponentCodeProps & MarkdownOptions['code']> = ({
  inline,
  className,
  children,
  theme = 'oneDark',
}) => {
  if (inline)
    return (
      <ui.code className={cx('ui-markdown-code', className)}>
        {children}
      </ui.code>
    )

  theme = useValue(theme)

  const language = className?.replace(/language-/, '')

  return (
    <ui.pre
      as={SyntaxHighlighter as any}
      className={cx('ui-markdown-code', className)}
      language={language}
      style={(styles as any)[theme]}
    >
      {String(children).replace(/\n$/, '')}
    </ui.pre>
  )
}
