import {
  ui,
  forwardRef,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  useMultiComponentStyle,
  CSSUIProps,
} from '@yamada-ui/core'
import { createContext, cx } from '@yamada-ui/utils'

const [CardProvider, useCard] = createContext<Record<string, CSSUIObject>>({
  name: `CardContext`,
  errorMessage: `useCard returned is 'undefined'. Seems you forgot to wrap the components in "<Card />" `,
})

type CardOptions = {
  /**
   * The CSS `flex-direction` property.
   */
  direction?: CSSUIProps['flexDirection']
  /**
   * The CSS `justify-content` property.
   */
  justify?: CSSUIProps['justifyContent']
  /**
   * The CSS `align-items` property.
   */
  align?: CSSUIProps['alignItems']
}

export type CardProps = HTMLUIProps<'article'> &
  ThemeProps<'Card'> &
  CardOptions

export const Card = forwardRef<CardProps, 'article'>((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle('Card', props)
  const {
    className,
    direction: flexDirection = 'column',
    justify: justifyContent,
    align: alignItems,
    ...rest
  } = omitThemeProps(mergedProps)

  const css: CSSUIObject = {
    display: 'flex',
    flexDirection,
    justifyContent,
    alignItems,
    wordWrap: 'break-word',
    ...styles.container,
  }

  return (
    <CardProvider value={styles}>
      <ui.article
        ref={ref}
        className={cx('ui-card', className)}
        __css={css}
        {...rest}
      />
    </CardProvider>
  )
})

export type CardHeaderProps = HTMLUIProps<'header'>

export const CardHeader = forwardRef<CardHeaderProps, 'header'>(
  ({ className, ...rest }, ref) => {
    const styles = useCard()

    const css: CSSUIObject = {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      ...styles.header,
    }

    return (
      <ui.header
        ref={ref}
        className={cx('ui-card__header', className)}
        __css={css}
        {...rest}
      />
    )
  },
)

export type CardBodyProps = HTMLUIProps<'main'>

export const CardBody = forwardRef<CardBodyProps, 'main'>(
  ({ className, ...rest }, ref) => {
    const styles = useCard()

    const css: CSSUIObject = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      ...styles.body,
    }

    return (
      <ui.main
        ref={ref}
        className={cx('ui-card__body', className)}
        __css={css}
        {...rest}
      />
    )
  },
)

export type CardFooterProps = HTMLUIProps<'footer'>

export const CardFooter = forwardRef<CardFooterProps, 'footer'>(
  ({ className, ...rest }, ref) => {
    const styles = useCard()

    const css: CSSUIObject = {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      ...styles.footer,
    }

    return (
      <ui.footer
        ref={ref}
        className={cx('ui-card__footer', className)}
        __css={css}
        {...rest}
      />
    )
  },
)
