"use client"

import type { ReactNode, SetStateAction } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { IconButtonProps } from "../button"
import type { CollapseProps } from "../collapse"
import type { CodeBlockStyle } from "./code-block.style"
import {
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { createSlotComponent, styled } from "../../core"
import { useClipboard } from "../../hooks/use-clipboard"
import { dataAttr, handlerAll, isString } from "../../utils"
import { IconButton } from "../button"
import { Collapse } from "../collapse"
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ClipboardIcon,
} from "../icon"
import { codeBlockStyle } from "./code-block.style"
import { codeToHighlightedHtml } from "./code-to-html"

interface ComponentContext extends Pick<
  CodeBlockRootProps,
  | "code"
  | "defaultCollapsed"
  | "highlight"
  | "language"
  | "lineNumbers"
  | "maxLines"
  | "showCopyTrigger"
  | "showLanguageLabel"
  | "title"
> {
  collapsed: boolean
  collapsedHeight: number
  collapsible: boolean
  contentId: string
  lineCount: number
  setCollapsed: (value: SetStateAction<boolean>) => void
  setCollapsedHeight: (value: number) => void
}

const {
  ComponentContext,
  PropsContext: CodeBlockPropsContext,
  useComponentContext,
  usePropsContext: useCodeBlockPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<CodeBlockRootProps, CodeBlockStyle, ComponentContext>(
  "code-block",
  codeBlockStyle,
)

export { CodeBlockPropsContext, useCodeBlockPropsContext }

export interface CodeBlockRootProps
  extends HTMLStyledProps, ThemeProps<CodeBlockStyle> {
  code?: string
  defaultCollapsed?: boolean
  highlight?: string
  language?: string
  lineNumbers?: boolean
  maxLines?: number
  showCopyTrigger?: boolean
  showLanguageLabel?: boolean
  title?: string
}

const getLineCount = (value?: string) => {
  if (!value) return 0

  return value.split(/\r?\n/).length
}

const getCollapsedHeight = (node: HTMLElement | null, lineCount: number) => {
  if (!node || !lineCount) return 0

  const computedStyle = window.getComputedStyle(node)
  const lineHeight = Number.parseFloat(computedStyle.lineHeight)
  const paddingTop = Number.parseFloat(computedStyle.paddingTop)
  const paddingBottom = Number.parseFloat(computedStyle.paddingBottom)
  const borderTopWidth = Number.parseFloat(computedStyle.borderTopWidth)
  const borderBottomWidth = Number.parseFloat(computedStyle.borderBottomWidth)

  return Math.ceil(
    lineHeight * lineCount +
      paddingTop +
      paddingBottom +
      borderTopWidth +
      borderBottomWidth,
  )
}

export const CodeBlockRoot = withProvider<"div", CodeBlockRootProps>(
  ({
    children,
    code,
    defaultCollapsed = false,
    highlight,
    language = "ts",
    lineNumbers = false,
    maxLines,
    showCopyTrigger = true,
    showLanguageLabel = true,
    title,
    ...rest
  }) => {
    const contentId = useId()
    const lineCount = useMemo(() => getLineCount(code), [code])
    const collapsible = !!maxLines && lineCount > maxLines
    const [collapsed, setCollapsed] = useState(defaultCollapsed && collapsible)
    const [collapsedHeight, setCollapsedHeight] = useState(0)

    useEffect(() => {
      setCollapsed(defaultCollapsed && collapsible)
    }, [collapsible, defaultCollapsed])

    const context = useMemo(
      () => ({
        code,
        collapsed,
        collapsedHeight,
        collapsible,
        contentId,
        defaultCollapsed,
        highlight,
        language,
        lineCount,
        lineNumbers,
        maxLines,
        setCollapsed,
        setCollapsedHeight,
        showCopyTrigger,
        showLanguageLabel,
        title,
      }),
      [
        code,
        collapsed,
        collapsedHeight,
        collapsible,
        contentId,
        defaultCollapsed,
        highlight,
        language,
        lineCount,
        lineNumbers,
        maxLines,
        showCopyTrigger,
        showLanguageLabel,
        title,
      ],
    )
    const computedChildren = useMemo<ReactNode>(() => {
      if (children) return children

      return (
        <>
          {title || showLanguageLabel || showCopyTrigger || collapsible ? (
            <CodeBlockHeader>
              <CodeBlockTitle />
              <CodeBlockControl>
                <CodeBlockLanguageLabel />
                <CodeBlockCollapseTrigger />
                <CodeBlockCopyTrigger />
              </CodeBlockControl>
            </CodeBlockHeader>
          ) : null}
          <CodeBlockContent>
            <CodeBlockCode />
          </CodeBlockContent>
        </>
      )
    }, [children, collapsible, showCopyTrigger, showLanguageLabel, title])

    return (
      <ComponentContext value={context}>
        <styled.div {...rest}>{computedChildren}</styled.div>
      </ComponentContext>
    )
  },
  "root",
)()

export interface CodeBlockHeaderProps extends HTMLStyledProps<"div"> {}

export const CodeBlockHeader = withContext<"div", CodeBlockHeaderProps>(
  "div",
  "header",
)()

export interface CodeBlockTitleProps extends HTMLStyledProps<"div"> {}

export const CodeBlockTitle = withContext<"div", CodeBlockTitleProps>(
  ({ children, ...rest }) => {
    const { title } = useComponentContext()
    const computedChildren = children ?? title

    if (!computedChildren) return null

    return <styled.div {...rest}>{computedChildren}</styled.div>
  },
  "title",
)()

export interface CodeBlockLanguageLabelProps extends HTMLStyledProps<"span"> {}

export const CodeBlockLanguageLabel = withContext<
  "span",
  CodeBlockLanguageLabelProps
>(({ children, ...rest }) => {
  const { language, showLanguageLabel } = useComponentContext()
  const computedChildren = children ?? language

  if (!showLanguageLabel || !computedChildren) return null

  return <styled.span {...rest}>{computedChildren}</styled.span>
}, "languageLabel")()

export interface CodeBlockControlProps extends HTMLStyledProps<"div"> {}

export const CodeBlockControl = withContext<"div", CodeBlockControlProps>(
  "div",
  "control",
)()

export interface CodeBlockCopyTriggerProps extends Omit<
  IconButtonProps,
  "aria-label" | "icon"
> {
  copiedLabel?: string
  copyLabel?: string
}

export const CodeBlockCopyTrigger = withContext<
  "button",
  CodeBlockCopyTriggerProps
>(({ copiedLabel, copyLabel, onClick, ...rest }) => {
  const { code, showCopyTrigger } = useComponentContext()
  const { copied, onCopy } = useClipboard(code ?? "")
  const ariaLabel = copied
    ? (copiedLabel ?? "Copied code")
    : (copyLabel ?? "Copy code")

  if (!showCopyTrigger || !code) return null

  return (
    <IconButton
      size="sm"
      variant="ghost"
      aria-label={ariaLabel}
      disableRipple
      icon={copied ? <CheckIcon /> : <ClipboardIcon />}
      {...rest}
      onClick={handlerAll(onClick, () => onCopy(code))}
    />
  )
}, "copyTrigger")()

export interface CodeBlockCollapseTriggerProps extends Omit<
  IconButtonProps,
  "aria-controls" | "aria-expanded" | "icon"
> {
  collapseLabel?: string
  expandLabel?: string
}

export const CodeBlockCollapseTrigger = withContext<
  "button",
  CodeBlockCollapseTriggerProps
>(({ collapseLabel, expandLabel, onClick, ...rest }) => {
  const { collapsed, collapsible, contentId, setCollapsed } =
    useComponentContext()
  const ariaLabel = collapsed
    ? (expandLabel ?? "Expand code")
    : (collapseLabel ?? "Collapse code")

  if (!collapsible) return null

  return (
    <IconButton
      size="sm"
      variant="ghost"
      aria-controls={contentId}
      aria-expanded={!collapsed}
      aria-label={ariaLabel}
      disableRipple
      icon={collapsed ? <ChevronDownIcon /> : <ChevronUpIcon />}
      {...rest}
      onClick={handlerAll(onClick, () => setCollapsed((prev) => !prev))}
    />
  )
}, "collapseTrigger")()

export interface CodeBlockContentProps extends Omit<
  CollapseProps,
  "children" | "open" | "startingHeight"
> {
  children?: ReactNode
}

export const CodeBlockContent = withContext<"div", CodeBlockContentProps>(
  ({ children, ...rest }) => {
    const { collapsed, collapsedHeight, collapsible, contentId } =
      useComponentContext()

    return (
      <Collapse
        id={contentId}
        open={!collapsible || !collapsed}
        startingHeight={collapsible ? collapsedHeight : 0}
        {...rest}
      >
        {children ?? <CodeBlockCode />}
      </Collapse>
    )
  },
  "content",
)()

export interface CodeBlockCodeProps extends Omit<
  HTMLStyledProps<"pre">,
  "children"
> {
  children?: string
  code?: string
  highlight?: string
  html?: string
  language?: string
  lineNumbers?: boolean
}

export const CodeBlockCode = withContext<"pre", CodeBlockCodeProps>(
  ({
    css,
    children,
    code: codeProp,
    highlight: highlightProp,
    html: htmlProp,
    language: languageProp,
    lineNumbers: lineNumbersProp,
    tabIndex = 0,
    ...rest
  }) => {
    const ref = useRef<HTMLPreElement>(null)
    const {
      code: contextCode,
      highlight: contextHighlight,
      language: contextLanguage,
      lineNumbers: contextLineNumbers,
      maxLines,
      setCollapsedHeight,
    } = useComponentContext()
    const code = children ?? codeProp ?? contextCode
    const highlight = highlightProp ?? contextHighlight
    const language = languageProp ?? contextLanguage ?? "ts"
    const lineNumbers = lineNumbersProp ?? contextLineNumbers ?? false
    const [html, setHtml] = useState(htmlProp)
    const lines = useMemo(() => code?.split(/\r?\n/) ?? [], [code])

    useEffect(() => {
      setHtml(htmlProp)
    }, [htmlProp])

    useEffect(() => {
      let mounted = true

      if (!code) {
        setHtml(htmlProp)

        return
      }

      if (htmlProp) return

      setHtml(undefined)

      codeToHighlightedHtml(code, { highlight, language })
        .then((nextHtml) => {
          if (mounted) setHtml(nextHtml)
        })
        .catch(() => {
          if (mounted) setHtml(undefined)
        })

      return () => {
        mounted = false
      }
    }, [code, highlight, htmlProp, language])

    useLayoutEffect(() => {
      if (!maxLines) return

      setCollapsedHeight(getCollapsedHeight(ref.current, maxLines))
    }, [html, lines.length, maxLines, setCollapsedHeight])

    if (!code) return null

    return (
      <styled.pre
        ref={ref}
        data-lang={language}
        data-line-numbers={dataAttr(lineNumbers)}
        focusVisibleRing="inside"
        tabIndex={tabIndex}
        {...rest}
        css={[
          {
            "& code": {
              bg: "transparent",
              border: "none",
              color: "inherit",
              display: "block",
              fontSize: "inherit",
              lineHeight: "inherit",
              minH: "inherit",
              p: "0",
              rounded: "inherit",
            },
            "& code .diff, & code .highlighted": {
              display: "block",
              mx: "-4",
              position: "relative",
              px: "4",
            },
            "& code .diff.add": {
              bg: ["green.400/15", "green.500/15"],
            },
            "& code .diff.remove": {
              bg: ["red.400/15", "red.500/15"],
            },
            "& code .highlighted": {
              bg: ["black.400/15", "white.500/15"],
            },
            "& code .highlighted-word": {
              bg: ["black.muted", "white.subtle"],
              borderColor: ["black.emphasized", "white.muted"],
              borderWidth: "1px",
              m: "-1px -2px",
              p: "1px 2px",
              rounded: "l1",
            },
            "& code .line": {
              display: "block",
              minH: "1lh",
              position: "relative",
            },
            "& code .line:empty::before": {
              content: '" "',
            },
            "& span": {
              _dark: {
                color: "{shiki-dark}!",
              },
            },
          },
          ...(lineNumbers
            ? [
                {
                  "& code": {
                    counterReset: "line",
                  },
                  "& code .diff, & code .highlighted": {
                    mx: "-4",
                    ps: "14",
                  },
                  "& code .line": {
                    counterIncrement: "line",
                    ps: "10",
                  },
                  "& code .line.diff::before, & code .line.highlighted::before":
                    {
                      left: "4",
                    },
                  "& code .line::before": {
                    color: "fg.subtle",
                    content: "counter(line)",
                    left: "0",
                    position: "absolute",
                    textAlign: "end",
                    userSelect: "none",
                    w: "7",
                  },
                  "& code .line:empty::before": {
                    content: "counter(line)",
                  },
                },
              ]
            : []),
          ...(isString(css) || !css ? [] : Array.isArray(css) ? css : [css]),
        ]}
      >
        {html ? (
          <styled.code dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <styled.code>
            {lines.map((line, index) => (
              <styled.span key={index} className="line">
                {line || " "}
              </styled.span>
            ))}
          </styled.code>
        )}
      </styled.pre>
    )
  },
  "code",
)()
