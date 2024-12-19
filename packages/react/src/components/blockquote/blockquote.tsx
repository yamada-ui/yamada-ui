import type { ReactNode } from "react"
import type { CSSUIObject, FC, HTMLUIProps, ThemeProps } from "../../core"
import { omitThemeProps, ui, useComponentMultiStyle } from "../../core"
import { createContext, cx, findChild, getValidChildren } from "../../utils"

interface BlockquoteContext {
  citeUrl: string | undefined
  styles: { [key: string]: CSSUIObject | undefined }
  withDash: boolean | undefined
}

export const [BlockquoteContext, useBlockquoteContext] =
  createContext<BlockquoteContext>({
    name: "BlockquoteContext",
    errorMessage: `useBlockquoteContext returned is 'undefined'. Seems you forgot to wrap the components in "<Blockquote />"`,
  })

interface BlockquoteOptions {
  /**
   * The citation of the blockquote.
   */
  cite?: ReactNode
  /**
   * The icon of the blockquote.
   */
  icon?: ReactNode
  /**
   * The alignment of the blockquote.
   *
   * @default "start"
   */
  justify?: "center" | "end" | "start"

  /**
   * The props for the `BlockquoteCaption` component.
   */
  captionProps?: HTMLUIProps<"figcaption">
  /**
   * The props for the `BlockquoteCite` component.
   */
  citeProps?: HTMLUIProps<"cite">
  /**
   * The props for the `BlockquoteContent` component.
   */
  contentProps?: HTMLUIProps<"blockquote">
}

export interface BlockquoteProps
  extends Omit<HTMLUIProps<"figure">, "cite">,
    ThemeProps<"Blockquote">,
    BlockquoteOptions,
    Pick<BlockquoteContentProps, "citeUrl">,
    Pick<BlockquoteCaptionProps, "withDash"> {}

/**
 * `Blockquote` is a component that represents a blockquote. By default, it renders a `blockquote` element.
 *
 * @see Docs https://yamada-ui.com/components/typography/blockquote
 */
export const Blockquote: FC<BlockquoteProps> = (props) => {
  const [styles, mergedProps] = useComponentMultiStyle("Blockquote", props)
  const {
    className,
    children,
    cite,
    citeUrl,
    icon,
    withDash,
    captionProps,
    citeProps,
    contentProps,
    ...rest
  } = omitThemeProps(mergedProps, ["justify"])
  const validChildren = getValidChildren(children)
  const customBlockquoteContent = findChild(validChildren, BlockquoteContent)
  const customBlockquoteCaption = findChild(validChildren, BlockquoteCaption)

  return (
    <BlockquoteContext value={{ citeUrl, styles, withDash }}>
      <ui.figure
        className={cx("ui-blockquote", className)}
        __css={styles.container}
        {...rest}
      >
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
      </ui.figure>
    </BlockquoteContext>
  )
}

Blockquote.__ui__ = "Blockquote"

interface BlockquoteContentOptions {
  /**
   * The URL of the citation of the blockquote.
   */
  citeUrl?: string
}

export interface BlockquoteContentProps
  extends HTMLUIProps<"blockquote">,
    BlockquoteContentOptions {}

export const BlockquoteContent: FC<BlockquoteContentProps> = ({
  className,
  cite,
  citeUrl: citeUrlProp,
  ...rest
}) => {
  const { citeUrl, styles } = useBlockquoteContext()

  return (
    <ui.blockquote
      className={cx("ui-blockquote__content", className)}
      cite={cite ?? citeUrlProp ?? citeUrl}
      __css={styles.content}
      {...rest}
    />
  )
}

BlockquoteContent.__ui__ = "BlockquoteContent"

interface BlockquoteCaptionOptions {
  /**
   * If `true`, the dash will be shown.
   *
   * @default false
   */
  withDash?: boolean
}

export interface BlockquoteCaptionProps
  extends HTMLUIProps<"figcaption">,
    BlockquoteCaptionOptions {}

export const BlockquoteCaption: FC<BlockquoteCaptionProps> = ({
  className,
  children,
  withDash: withDashProp,
  ...rest
}) => {
  const { styles, withDash = false } = useBlockquoteContext()

  withDashProp ??= withDash

  return (
    <ui.figcaption
      className={cx("ui-blockquote__caption", className)}
      __css={styles.caption}
      {...rest}
    >
      {withDashProp ? <>&mdash;</> : null} {children}
    </ui.figcaption>
  )
}

BlockquoteCaption.__ui__ = "BlockquoteCaption"

export interface BlockquoteCiteProps extends HTMLUIProps<"cite"> {}

export const BlockquoteCite: FC<BlockquoteCiteProps> = ({
  className,
  ...rest
}) => {
  const { styles } = useBlockquoteContext()

  return (
    <ui.cite
      className={cx("ui-blockquote__cite", className)}
      __css={styles.cite}
      {...rest}
    />
  )
}

BlockquoteCite.__ui__ = "BlockquoteCite"
