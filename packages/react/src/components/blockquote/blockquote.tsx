"use client"

import type { ReactNode } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { BlockquoteStyle } from "./blockquote.style"
import { useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { useFindChild, useValidChildren } from "../../utils"
import { QuoteIcon } from "../icon"
import { blockquoteStyle } from "./blockquote.style"

interface ComponentContext
  extends
    Pick<BlockquoteContentProps, "citeUrl">,
    Pick<BlockquoteCaptionProps, "withDash"> {}

export interface BlockquoteRootProps
  extends
    Omit<HTMLStyledProps<"figure">, "cite">,
    ThemeProps<BlockquoteStyle>,
    Pick<BlockquoteContentProps, "citeUrl">,
    Pick<BlockquoteCaptionProps, "withDash"> {
  /**
   * The citation of the blockquote.
   */
  cite?: ReactNode
  /**
   * The icon of the blockquote.
   */
  icon?: ReactNode
  /**
   * The props for the `BlockquoteCaption` component.
   */
  captionProps?: HTMLStyledProps<"figcaption">
  /**
   * The props for the `BlockquoteCite` component.
   */
  citeProps?: HTMLStyledProps<"cite">
  /**
   * The props for the `BlockquoteContent` component.
   */
  contentProps?: HTMLStyledProps<"blockquote">
}

const {
  ComponentContext,
  PropsContext: BlockquotePropsContext,
  useComponentContext,
  usePropsContext: useBlockquotePropsContext,
  withContext,
  withProvider,
} = createSlotComponent<BlockquoteRootProps, BlockquoteStyle, ComponentContext>(
  "blockquote",
  blockquoteStyle,
)

export { BlockquotePropsContext, useBlockquotePropsContext }

/**
 * `Blockquote` is a component that represents a blockquote. By default, it renders a `blockquote` element.
 *
 * @see https://yamada-ui.com/docs/components/blockquote
 */
export const BlockquoteRoot = withProvider<"figure", BlockquoteRootProps>(
  ({
    children,
    cite,
    citeUrl,
    icon,
    withDash,
    captionProps,
    citeProps,
    contentProps,
    ...rest
  }) => {
    const validChildren = useValidChildren(children)
    const customBlockquoteContent = useFindChild(
      validChildren,
      BlockquoteContent,
    )
    const customBlockquoteCaption = useFindChild(
      validChildren,
      BlockquoteCaption,
    )

    const context = useMemo(() => ({ citeUrl, withDash }), [citeUrl, withDash])

    return (
      <ComponentContext value={context}>
        <styled.figure {...rest}>
          {icon}

          {customBlockquoteContent ?? (
            <BlockquoteContent {...contentProps}>{children}</BlockquoteContent>
          )}

          {customBlockquoteCaption ??
            (cite ? (
              <BlockquoteCaption {...captionProps}>
                <BlockquoteCite {...citeProps}>{cite}</BlockquoteCite>
              </BlockquoteCaption>
            ) : null)}
        </styled.figure>
      </ComponentContext>
    )
  },
  "root",
)()

export interface BlockquoteContentProps extends HTMLStyledProps<"blockquote"> {
  /**
   * The URL of the citation of the blockquote.
   */
  citeUrl?: string
}

export const BlockquoteContent = withContext<
  "blockquote",
  BlockquoteContentProps
>("blockquote", "content")(
  undefined,
  ({ cite, citeUrl: citeUrlProp, ...rest }) => {
    const { citeUrl } = useComponentContext()

    return { ...rest, citeurl: cite ?? citeUrlProp ?? citeUrl }
  },
)

export interface BlockquoteCaptionProps extends HTMLStyledProps<"figcaption"> {
  /**
   * If `true`, the dash will be shown.
   *
   * @default false
   */
  withDash?: boolean
}

export const BlockquoteCaption = withContext<
  "figcaption",
  BlockquoteCaptionProps
>("figcaption", "caption")(
  undefined,
  ({ children, withDash: withDashProp, ...rest }) => {
    const { withDash } = useComponentContext()

    withDashProp ??= withDash

    return {
      ...rest,
      children: (
        <>
          {withDashProp ? <>&mdash;</> : null} {children}
        </>
      ),
    }
  },
)

export interface BlockquoteCiteProps extends HTMLStyledProps<"cite"> {}

export const BlockquoteCite = withContext<"cite", BlockquoteCiteProps>(
  "cite",
  "cite",
)()

export interface BlockquoteIconProps extends HTMLStyledProps<"svg"> {}

export const BlockquoteIcon = withContext<"svg", BlockquoteIconProps>(
  QuoteIcon,
  "icon",
)()
