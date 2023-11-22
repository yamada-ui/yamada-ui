import { Alert, AlertIcon, AlertDescription } from "@yamada-ui/alert"
import {
  ui,
  forwardRef,
  HTMLUIProps,
  omitThemeProps,
  ThemeProps,
  useComponentStyle,
  ColorModeArray,
} from "@yamada-ui/core"
import { useValue } from "@yamada-ui/use-value"
import { cx, filterEmpty } from "@yamada-ui/utils"
import { ComponentPropsWithoutRef, FC } from "react"
import ReactMarkdown from "react-markdown"
import {
  Components,
  CodeProps,
  HeadingProps,
  LiProps,
  OrderedListProps,
  TableDataCellProps,
  TableRowProps,
  UnorderedListProps,
} from "react-markdown/lib/ast-to-react"
import { ReactMarkdownProps } from "react-markdown/lib/complex-types"
import { ReactMarkdownOptions } from "react-markdown/lib/react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"
import { CodeThemeNames, codeThemes } from "./code-theme"
import { remarkUIComponent } from "./remark-ui-component"
export type MarkdownComponents = Components
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
  code?: { theme?: CodeThemeNames | ColorModeArray<CodeThemeNames> }
}

export type MarkdownProps = Omit<HTMLUIProps<"div">, "children"> &
  ThemeProps<"Markdown"> &
  MarkdownOptions

export const Markdown = forwardRef<MarkdownProps, "div">((props, ref) => {
  const [css, mergedProps] = useComponentStyle("Markdown", props)
  console.log(css)
  let {
    className,
    remarkPlugins,
    rehypePlugins,
    linkTarget = "_blank",
    components,
    code,
    ...rest
  } = omitThemeProps(mergedProps)

  remarkPlugins = [
    remarkGfm,
    remarkUIComponent,
    ...filterEmpty(remarkPlugins ?? []),
  ]
  rehypePlugins = [rehypeRaw, ...filterEmpty(rehypePlugins ?? [])]
  components = {
    code: (props: CodeProps) => {
      console.log(props)
      return <Code {...code} {...props} />
    },
    note: ({ className, children, ...rest }: any) => {
      return (
        <Alert status={className} {...rest}>
          <AlertIcon />
          <AlertDescription>{children}</AlertDescription>
        </Alert>
      )
    },
    ...components,
  }

  return (
    <ui.div
      as={ReactMarkdown}
      ref={ref}
      className={cx("ui-markdown", className)}
      remarkPlugins={remarkPlugins}
      rehypePlugins={rehypePlugins}
      components={components}
      linkTarget={linkTarget}
      __css={css}
      {...rest}
    />
  )
})

const Code: FC<MarkdownComponentCodeProps & MarkdownOptions["code"]> = ({
  inline,
  className,
  children,
  theme = "oneDark",
}) => {
  if (inline)
    return (
      <ui.code className={cx("ui-markdown__code--inline", className)}>
        {children}
      </ui.code>
    )

  theme = useValue(theme)

  const language = className?.replace(/language-/, "")

  return (
    <ui.pre
      as={SyntaxHighlighter as any}
      className={cx("ui-markdown__code", className)}
      language={language}
      style={codeThemes[theme]}
    >
      {String(children).replace(/\n$/, "")}
    </ui.pre>
  )
}
