import type { AlertProps } from "@yamada-ui/alert"
import type {
  ColorModeArray,
  FC,
  HTMLUIProps,
  ThemeProps,
} from "@yamada-ui/core"
import type { Components, Options } from "react-markdown"
import type { CodeThemeNames } from "./code-theme"
import { Alert, AlertDescription, AlertIcon } from "@yamada-ui/alert"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentStyle,
} from "@yamada-ui/core"
import { useValue } from "@yamada-ui/use-value"
import { cx, filterEmpty } from "@yamada-ui/utils"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import rehypeRaw from "rehype-raw"
import remarkBreaks from "remark-breaks"
import remarkGfm from "remark-gfm"
import { codeThemes } from "./code-theme"
import { rehypePlugin, remarkUIComponent } from "./remark-ui-component"

interface UIComponents {
  note?: FC<MarkdownComponentProps<"div">>
}

export interface MarkdownComponents extends Components, UIComponents {}
export type MarkdownComponentProps<
  Y extends keyof React.JSX.IntrinsicElements,
> = React.JSX.IntrinsicElements[Y]

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
  extends Omit<HTMLUIProps, "children" | "className">,
    ThemeProps<"Markdown">,
    MarkdownOptions {}

/**
 * `Markdown` is a component that renders text in markdown format.
 *
 * @see Docs https://yamada-ui.com/components/data-display/markdown
 */
export const Markdown = forwardRef<MarkdownProps, "div">((props, ref) => {
  const [css, mergedProps] = useComponentStyle("Markdown", props)
  const {
    className,
    components: _components,
    rehypePlugins: _rehypePlugins,
    remarkPlugins: _remarkPlugins,
    codeProps,
    noteProps,
    ...rest
  } = omitThemeProps(mergedProps)

  const remarkPlugins = [
    remarkGfm,
    remarkBreaks,
    remarkUIComponent,
    ...filterEmpty(_remarkPlugins ?? []),
  ]
  const rehypePlugins = [
    rehypePlugin,
    rehypeRaw,
    ...filterEmpty(_rehypePlugins ?? []),
  ]
  const components = {
    ...uiComponents({ codeProps, noteProps }),
    ..._components,
  } as MarkdownComponents

  return (
    <ui.div
      ref={ref}
      as={ReactMarkdown}
      className={cx("ui-markdown", className ?? undefined)}
      components={components}
      rehypePlugins={rehypePlugins}
      remarkPlugins={remarkPlugins}
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
      style={codeThemes[theme]}
      language={language}
    >
      {String(children).replace(/\n$/, "")}
    </ui.pre>
  )
}

Code.displayName = "Code"
Code.__ui__ = "Code"
