"use client"

import type { ReactNode } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { ButtonProps, IconButtonProps } from "../button"
import type { CollapseProps } from "../collapse"
import type { CodeBlockStyle } from "./code-block.style"
import type { UseCodeBlockProps, UseCodeBlockReturn } from "./use-code-block"
import { useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { useClipboard } from "../../hooks/use-clipboard"
import { dataAttr, handlerAll } from "../../utils"
import { Button, IconButton } from "../button"
import { Collapse } from "../collapse"
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ClipboardIcon,
} from "../icon"
import { codeBlockStyle } from "./code-block.style"
import { useCodeBlock, useCodeBlockCode } from "./use-code-block"

interface ComponentContext extends UseCodeBlockReturn {}

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
  extends UseCodeBlockProps, HTMLStyledProps, ThemeProps<CodeBlockStyle> {}

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
    const context = useCodeBlock({
      code,
      defaultCollapsed,
      highlight,
      language,
      lineNumbers,
      maxLines,
      showCopyTrigger,
      showLanguageLabel,
      title,
    })
    const computedChildren = useMemo<ReactNode>(() => {
      if (children) return children

      return (
        <>
          {title || showLanguageLabel || showCopyTrigger ? (
            <CodeBlockHeader>
              <CodeBlockTitle />
              <CodeBlockControl>
                <CodeBlockLanguageLabel />
                <CodeBlockCopyTrigger />
              </CodeBlockControl>
            </CodeBlockHeader>
          ) : null}
          <CodeBlockContent>
            <CodeBlockCode />
          </CodeBlockContent>
        </>
      )
    }, [children, showCopyTrigger, showLanguageLabel, title])

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
  ButtonProps,
  "aria-controls" | "aria-expanded" | "endIcon"
> {
  collapseLabel?: string
  expandLabel?: string
  icon?: ReactNode
}

export const CodeBlockCollapseTrigger = withContext<
  "button",
  CodeBlockCollapseTriggerProps
>(({ children, collapseLabel, expandLabel, icon, onClick, ...rest }) => {
  const { collapsed, collapsible, contentId, setCollapsed } =
    useComponentContext()
  const label = collapsed
    ? (expandLabel ?? "Expand code")
    : (collapseLabel ?? "Collapse code")
  const computedChildren = children ?? label
  const computedIcon =
    icon ?? (collapsed ? <ChevronDownIcon /> : <ChevronUpIcon />)

  if (!collapsible) return null

  return (
    <Button
      size="sm"
      variant="ghost"
      aria-controls={contentId}
      aria-expanded={!collapsed}
      disableRipple
      endIcon={computedIcon}
      {...rest}
      onClick={handlerAll(onClick, () => setCollapsed((prev) => !prev))}
    >
      {computedChildren}
    </Button>
  )
}, "collapseTrigger")()

export interface CodeBlockFooterProps extends HTMLStyledProps<"div"> {}

export const CodeBlockFooter = withContext<"div", CodeBlockFooterProps>(
  "div",
  "footer",
)()

export interface CodeBlockContentProps extends Omit<
  CollapseProps,
  "children" | "open" | "startingHeight"
> {
  children?: ReactNode
  showCollapseTrigger?: boolean
}

export const CodeBlockContent = withContext<"div", CodeBlockContentProps>(
  ({ className, css, children, showCollapseTrigger = true, ...rest }) => {
    const { collapsed, collapsedHeight, collapsible, contentId } =
      useComponentContext()

    return (
      <styled.div
        id={contentId}
        className={className}
        css={css}
        data-collapsed={dataAttr(
          collapsible && collapsed && showCollapseTrigger,
        )}
        data-collapsible={dataAttr(collapsible)}
      >
        <Collapse
          open={!collapsible || !collapsed}
          startingHeight={collapsible ? collapsedHeight : 0}
          {...rest}
        >
          {children ?? <CodeBlockCode />}
        </Collapse>

        {collapsible && showCollapseTrigger ? (
          <CodeBlockFooter>
            <CodeBlockCollapseTrigger />
          </CodeBlockFooter>
        ) : null}
      </styled.div>
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
    const language = languageProp ?? contextLanguage
    const lineNumbers = lineNumbersProp ?? contextLineNumbers
    const { ref, html, lines } = useCodeBlockCode({
      code,
      highlight,
      html: htmlProp,
      language,
      maxLines,
      setCollapsedHeight,
    })

    if (!code) return null

    return (
      <styled.pre
        ref={ref}
        data-lang={language}
        data-line-numbers={dataAttr(lineNumbers)}
        focusVisibleRing="inside"
        tabIndex={tabIndex}
        {...rest}
        css={css}
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
