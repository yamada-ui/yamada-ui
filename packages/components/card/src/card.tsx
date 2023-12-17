import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  omitThemeProps,
  useMultiComponentStyle,
} from "@yamada-ui/core"
import { createContext, cx } from "@yamada-ui/utils"

const [CardProvider, useCard] = createContext<Record<string, CSSUIObject>>({
  name: `CardContext`,
  errorMessage: `useCard returned is 'undefined'. Seems you forgot to wrap the components in "<Card />" `,
})

type CardOptions = {
  /**
   * The CSS `flex-direction` property.
   */
  direction?: CSSUIObject["flexDirection"]
  /**
   * The CSS `justify-content` property.
   */
  justify?: CSSUIObject["justifyContent"]
  /**
   * The CSS `align-items` property.
   */
  align?: CSSUIObject["alignItems"]
}

export type CardProps = Omit<HTMLUIProps<"article">, "direction"> &
  ThemeProps<"Card"> &
  CardOptions

export const Card = forwardRef<CardProps, "article">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("Card", props)
  const {
    className,
    direction: flexDirection = "column",
    justify: justifyContent,
    align: alignItems,
    ...rest
  } = omitThemeProps(mergedProps)

  const css: CSSUIObject = {
    display: "flex",
    flexDirection,
    justifyContent,
    alignItems,
    wordWrap: "break-word",
    ...styles.container,
  }

  return (
    <CardProvider value={styles}>
      <ui.div
        ref={ref}
        className={cx("ui-card", className)}
        __css={css}
        {...rest}
      />
    </CardProvider>
  )
})

export type CardHeaderProps = HTMLUIProps<"header">

export const CardHeader = forwardRef<CardHeaderProps, "header">(
  ({ className, ...rest }, ref) => {
    const styles = useCard()

    const css: CSSUIObject = {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      ...styles.header,
    }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-card__header", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

export type CardBodyProps = HTMLUIProps<"main">

export const CardBody = forwardRef<CardBodyProps, "main">(
  ({ className, ...rest }, ref) => {
    const styles = useCard()

    const css: CSSUIObject = {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
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

export type CardFooterProps = HTMLUIProps<"footer">

export const CardFooter = forwardRef<CardFooterProps, "footer">(
  ({ className, ...rest }, ref) => {
    const styles = useCard()

    const css: CSSUIObject = {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      ...styles.footer,
    }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-card__footer", className)}
        __css={css}
        {...rest}
      />
    )
  },
)
