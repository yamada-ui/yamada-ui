import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import { createContext, cx } from "@yamada-ui/utils"

const [CardProvider, useCard] = createContext<{
  [key: string]: CSSUIObject | undefined
}>({
  name: `CardContext`,
  errorMessage: `useCard returned is 'undefined'. Seems you forgot to wrap the components in "<Card />" `,
})

interface CardOptions {
  /**
   * The CSS `align-items` property.
   */
  align?: CSSUIObject["alignItems"]
  /**
   * The CSS `flex-direction` property.
   * This is deprecated and will be replaced by `orientation`.
   * If specified at the same time as `orientation`, `orientation` takes precedence.
   *
   * @deprecated Use `orientation` instead.
   */
  direction?: CSSUIObject["flexDirection"]
  /**
   * The CSS `justify-content` property.
   */
  justify?: CSSUIObject["justifyContent"]
  /**
   * The CSS `flex-direction` property.
   */
  orientation?: CSSUIObject["flexDirection"]
}

export interface CardProps
  extends Omit<HTMLUIProps<"article">, "direction" | "orientation">,
    ThemeProps<"Card">,
    CardOptions {}

/**
 * `Card` is a component that groups and displays related information. By default, it renders a `article` element.
 *
 * @see Docs https://yamada-ui.com/components/data-display/card
 */
export const Card = forwardRef<CardProps, "article">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("Card", props)
  const {
    className,
    align: alignItems,
    direction,
    justify: justifyContent,
    orientation: flexDirection = direction ?? "column",
    ...rest
  } = omitThemeProps(mergedProps)

  const css: CSSUIObject = {
    alignItems,
    display: "flex",
    flexDirection,
    justifyContent,
    wordWrap: "break-word",
    ...styles.container,
  }

  return (
    <CardProvider value={styles}>
      <ui.article
        ref={ref}
        className={cx("ui-card", className)}
        __css={css}
        {...rest}
      />
    </CardProvider>
  )
})

Card.displayName = "Card"
Card.__ui__ = "Card"

export interface CardHeaderProps extends HTMLUIProps<"header"> {}

export const CardHeader = forwardRef<CardHeaderProps, "header">(
  ({ className, ...rest }, ref) => {
    const styles = useCard()

    const css: CSSUIObject = {
      alignItems: "center",
      display: "flex",
      justifyContent: "flex-start",
      ...styles.header,
    }

    return (
      <ui.header
        ref={ref}
        className={cx("ui-card__header", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

CardHeader.displayName = "CardHeader"
CardHeader.__ui__ = "CardHeader"

export interface CardBodyProps extends HTMLUIProps {}

export const CardBody = forwardRef<CardBodyProps, "div">(
  ({ className, ...rest }, ref) => {
    const styles = useCard()

    const css: CSSUIObject = {
      alignItems: "flex-start",
      display: "flex",
      flexDirection: "column",
      ...styles.body,
    }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-card__body", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

CardBody.displayName = "CardBody"
CardBody.__ui__ = "CardBody"

export interface CardFooterProps extends HTMLUIProps<"footer"> {}

export const CardFooter = forwardRef<CardFooterProps, "footer">(
  ({ className, ...rest }, ref) => {
    const styles = useCard()

    const css: CSSUIObject = {
      alignItems: "center",
      display: "flex",
      justifyContent: "flex-start",
      ...styles.footer,
    }

    return (
      <ui.footer
        ref={ref}
        className={cx("ui-card__footer", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

CardFooter.displayName = "CardFooter"
CardFooter.__ui__ = "CardFooter"
