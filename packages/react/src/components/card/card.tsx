import type {
  CSSUIObject,
  CSSUIProps,
  FC,
  HTMLUIProps,
  ThemeProps,
} from "../../core"
import { omitThemeProps, ui, useComponentMultiStyle } from "../../core"
import { createContext, cx } from "../../utils"

const [CardProvider, useCardContext] = createContext<{
  [key: string]: CSSUIObject | undefined
}>({
  name: `CardContext`,
  errorMessage: `useCardContext returned is 'undefined'. Seems you forgot to wrap the components in "<Card />" `,
})

interface CardOptions {
  /**
   * The CSS `align-items` property.
   */
  align?: CSSUIProps["alignItems"]
  /**
   * The CSS `flex-direction` property.
   *
   * @deprecated Use `flexDirection` instead.
   */
  direction?: CSSUIProps["flexDirection"]
  /**
   * The CSS `justify-content` property.
   */
  justify?: CSSUIProps["justifyContent"]
}

export interface CardProps
  extends Omit<HTMLUIProps<"article">, "direction">,
    ThemeProps<"Card">,
    CardOptions {}

/**
 * `Card` is a component that groups and displays related information. By default, it renders a `article` element.
 *
 * @see Docs https://yamada-ui.com/components/data-display/card
 */
export const Card: FC<CardProps> = (props) => {
  const [styles, mergedProps] = useComponentMultiStyle("Card", props)
  const {
    className,
    align: alignItems,
    direction = "column",
    flexDirection = direction,
    justify: justifyContent,
    ...rest
  } = omitThemeProps(mergedProps)

  return (
    <CardProvider value={styles}>
      <ui.article
        className={cx("ui-card", className)}
        __css={{
          alignItems,
          flexDirection,
          justifyContent,
          ...styles.container,
        }}
        {...rest}
      />
    </CardProvider>
  )
}

Card.__ui__ = "Card"

export interface CardHeaderProps extends HTMLUIProps<"header"> {}

export const CardHeader: FC<CardHeaderProps> = ({ className, ...rest }) => {
  const styles = useCardContext()

  return (
    <ui.header
      className={cx("ui-card__header", className)}
      __css={styles.header}
      {...rest}
    />
  )
}

CardHeader.__ui__ = "CardHeader"

export interface CardBodyProps extends HTMLUIProps {}

export const CardBody: FC<CardBodyProps> = ({ className, ...rest }) => {
  const styles = useCardContext()

  return (
    <ui.div
      className={cx("ui-card__body", className)}
      __css={styles.body}
      {...rest}
    />
  )
}

CardBody.__ui__ = "CardBody"

export interface CardFooterProps extends HTMLUIProps<"footer"> {}

export const CardFooter: FC<CardBodyProps> = ({ className, ...rest }) => {
  const styles = useCardContext()

  return (
    <ui.footer
      className={cx("ui-card__footer", className)}
      __css={styles.footer}
      {...rest}
    />
  )
}

CardFooter.__ui__ = "CardFooter"
