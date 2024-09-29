import type { AlertProps } from "@yamada-ui/alert"
import { Alert, AlertDescription, AlertIcon } from "@yamada-ui/alert"
import type {
  ColorModeArray,
  FC,
  HTMLUIProps,
  ThemeProps,
} from "@yamada-ui/core"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentStyle,
} from "@yamada-ui/core"
import { useValue } from "@yamada-ui/use-value"
import { cx, filterEmpty } from "@yamada-ui/utils"
import ReactMarkdown from "react-markdown"
import type { Components, Options } from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import rehypeRaw from "rehype-raw"
import remarkBreaks from "remark-breaks"
import remarkGfm from "remark-gfm"
import type { CodeThemeNames } from "./code-theme"
import { codeThemes } from "./code-theme"
import { rehypePlugin, remarkUIComponent } from "./remark-ui-component"

interface UIComponents {
  note?: FC<MarkdownComponentProps<"div">>
}

export interface MarkdownComponents extends Components, UIComponents {}
export type MarkdownComponentProps<Y extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[Y]

const uiComponents = ({
  codeProps,
  noteProps,
}: Pick<MarkdownProps, "codeProps" | "noteProps">): MarkdownComponents =>
  ({
    code: (props) => {
      return <Code {...codeProps} {...props} />
    },
    note: ({ children, ...rest }) => {
      return (
        <Alert mb="4" {...noteProps} {...rest}>
          <AlertIcon />
          <AlertDescription whiteSpace="pre-line">{children}</AlertDescription>
        </Alert>
      )
    },
  }) as MarkdownComponents

interface MarkdownOptions extends Options {
  /**
   * If provided, this will set the theme for the code.
   */
  codeProps?: { theme?: CodeThemeNames | ColorModeArray<CodeThemeNames> }
  /**
   * If provided, this will set the theme for the note.
   */
  noteProps?: AlertProps
}

export interface MarkdownProps
  extends Omit<HTMLUIProps, "className" | "children">,
    ThemeProps<"Markdown">,
    MarkdownOptions {}

/**
 * `Markdown` is a component that renders text in markdown format.
 *
 * @see Docs https://yamada-ui.com/components/data-display/markdown
 */
export const Markdown = forwardRef<MarkdownProps, "div">((props, ref) => {
  const [css, mergedProps] = useComponentStyle("Markdown", props)
  let {
    className,
    remarkPlugins,
    rehypePlugins,
    components,
    codeProps,
    noteProps,
    ...rest
  } = omitThemeProps(mergedProps)

  remarkPlugins = [
    remarkGfm,
    remarkBreaks,
    remarkUIComponent,
    ...filterEmpty(remarkPlugins ?? []),
  ]
  rehypePlugins = [rehypePlugin, rehypeRaw, ...filterEmpty(rehypePlugins ?? [])]
  components = {
    ...uiComponents({ codeProps, noteProps }),
    ...components,
  } as MarkdownComponents

  return (
    <ui.div
      as={ReactMarkdown}
      ref={ref}
      className={cx("ui-markdown", className ?? undefined)}
      remarkPlugins={remarkPlugins}
      rehypePlugins={rehypePlugins}
      components={components}
      __css={css}
      {...rest}
    />
  )
})

Markdown.displayName = "Markdown"
Markdown.__ui__ = "Markdown"

interface CodeProps extends MarkdownComponentProps<"code"> {
  theme?: CodeThemeNames | ColorModeArray<CodeThemeNames>
}

const Code: FC<CodeProps> = ({
  className = "",
  children,
  theme = "oneDark",
}) => {
  theme = useValue(theme)

  const isInline = !/language-(\w+)/.test(className)

  const language = className.replace(/language-/, "")

  return isInline ? (
    <ui.code className={cx("ui-markdown__code--inline", className)}>
      {children}
    </ui.code>
  ) : (
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

Code.displayName = "Code"
Code.__ui__ = "Code"
