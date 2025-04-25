import type { ReactNode } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { BlockquoteStyle } from "./blockquote.style"
import { useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { findChild, getValidChildren } from "../../utils"
import { QuoteIcon } from "../icon"
import { blockquoteStyle } from "./blockquote.style"

interface BlockquoteContext
  extends Pick<BlockquoteContentProps, "citeUrl">,
    Pick<BlockquoteCaptionProps, "withDash"> {}

export interface BlockquoteRootProps
  extends Omit<HTMLStyledProps<"figure">, "cite">,
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

export const {
  ComponentContext: BlockquoteContext,
  PropsContext: BlockquotePropsContext,
  useComponentContext: useBlockquoteContext,
  usePropsContext: useBlockquotePropsContext,
  withContext,
  withProvider,
} = createSlotComponent<
  BlockquoteRootProps,
  BlockquoteStyle,
  BlockquoteContext
>("blockquote", blockquoteStyle)

/**
 * `Blockquote` is a component that represents a blockquote. By default, it renders a `blockquote` element.
 *
 * @see https://yamada-ui.com/components/blockquote
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
    const validChildren = getValidChildren(children)
    const customBlockquoteContent = findChild(validChildren, BlockquoteContent)
    const customBlockquoteCaption = findChild(validChildren, BlockquoteCaption)

    const context = useMemo(() => ({ citeUrl, withDash }), [citeUrl, withDash])

    return (
      <BlockquoteContext value={context}>
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
      </BlockquoteContext>
    )
  },
  "root",
)()

interface BlockquoteContentOptions {
  /**
   * The URL of the citation of the blockquote.
   */
  citeUrl?: string
}

export interface BlockquoteContentProps
  extends HTMLStyledProps<"blockquote">,
    BlockquoteContentOptions {}

export const BlockquoteContent = withContext<
  "blockquote",
  BlockquoteContentProps
>("blockquote", "content")(
  undefined,
  ({ cite, citeUrl: citeUrlProp, ...rest }) => {
    const { citeUrl } = useBlockquoteContext()

    return { ...rest, citeurl: cite ?? citeUrlProp ?? citeUrl }
  },
)

interface BlockquoteCaptionOptions {
  /**
   * If `true`, the dash will be shown.
   *
   * @default false
   */
  withDash?: boolean
}

export interface BlockquoteCaptionProps
  extends HTMLStyledProps<"figcaption">,
    BlockquoteCaptionOptions {}

export const BlockquoteCaption = withContext<
  "figcaption",
  BlockquoteCaptionProps
>("figcaption", "caption")(
  undefined,
  ({ children, withDash: withDashProp, ...rest }) => {
    const { withDash } = useBlockquoteContext()

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
)({ "data-icon": "" })
