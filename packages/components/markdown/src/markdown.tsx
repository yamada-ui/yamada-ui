import type { AlertProps } from "@yamada-ui/alert"
import { Alert, AlertIcon, AlertDescription } from "@yamada-ui/alert"
import type { HTMLUIProps, ThemeProps, ColorModeArray } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  omitThemeProps,
  useComponentStyle,
} from "@yamada-ui/core"
import { useValue } from "@yamada-ui/use-value"
import { cx, filterEmpty } from "@yamada-ui/utils"
import type { FC } from "react"
import ReactMarkdown from "react-markdown"
import type { Components, Options } from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"
import type { CodeThemeNames } from "./code-theme"
import { codeThemes } from "./code-theme"
import { remarkUIComponent } from "./remark-ui-component"

type UIComponents = {
  note?: FC<MarkdownComponentProps<"div">>
}

export type MarkdownComponents = Components & UIComponents
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

type MarkdownOptions = Options & {
  /**
   * If provided, this will set the theme for the code.
   */
  codeProps?: { theme?: CodeThemeNames | ColorModeArray<CodeThemeNames> }
  /**
   * If provided, this will set the theme for the note.
   */
  noteProps?: AlertProps
}

export type MarkdownProps = Omit<HTMLUIProps<"div">, "children"> &
  ThemeProps<"Markdown"> &
  MarkdownOptions

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
    remarkUIComponent,
    ...filterEmpty(remarkPlugins ?? []),
  ]
  rehypePlugins = [rehypeRaw, ...filterEmpty(rehypePlugins ?? [])]
  components = {
    ...uiComponents({ codeProps, noteProps }),
    ...components,
  } as MarkdownComponents

  return (
    <ui.div
      as={ReactMarkdown}
      ref={ref}
      className={cx("ui-markdown", className)}
      remarkPlugins={remarkPlugins}
      rehypePlugins={rehypePlugins}
      components={components}
      __css={css}
      {...rest}
    />
  )
})

const Code: FC<MarkdownComponentProps<"code"> & MarkdownProps["codeProps"]> = ({
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
