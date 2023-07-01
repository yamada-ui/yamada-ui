import {
  ui,
  forwardRef,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  useComponentStyle,
  Token,
} from '@yamada-ui/core'
import { useValue } from '@yamada-ui/use-value'
import { cx } from '@yamada-ui/utils'
import { ReactNode, useMemo } from 'react'

type IndicatorOptions = {
  children: ReactNode
  /**
   * If `true`, set the indicator as an inline element.
   *
   * @default false
   * */
  inline?: Token<boolean>
  /**
   * The placement of the indicator.
   *
   * @default 'top-right'
   */
  placement?: Token<
    'top' | 'top-left' | 'top-right' | 'left' | 'right' | 'bottom' | 'bottom-left' | 'bottom-right'
  >
  /**
   * Changes position offset, usually used when element has border-radius.
   *
   * @default 0
   */
  offset?: Token<number>
  /**
   * The indicator label to use.
   */
  label?: ReactNode
  /**
   * If `label` is of type number, the maximum number displayed.
   *
   * @default 99
   */
  overflowCount?: number
  /**
   * If `true`, display 0.
   *
   * @default true
   */
  showZero?: boolean
  /**
   * If `true`, the indicator will be disabled.
   *
   * @default false
   */
  isDisabled?: boolean
  /**
   * If `true`, display the border of the indicator.
   *
   * @default false
   */
  withBorder?: boolean
}

export type IndicatorProps = Omit<HTMLUIProps<'div'>, 'children'> &
  ThemeProps<'Indicator'> &
  IndicatorOptions

const getPlacementStyle = (
  placement:
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'left'
    | 'right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right',
  offset: number,
): CSSUIObject => {
  const styles: CSSUIObject = {}
  let translateX = ''
  let translateY = ''

  if (placement.includes('top')) {
    styles.top = offset
    translateY = '-50%'
  } else if (placement.includes('bottom')) {
    styles.bottom = offset
    translateY = '50%'
  } else {
    styles.top = '50%'
    translateY = '-50%'
  }

  if (placement.includes('left')) {
    styles.left = offset
    translateX = '-50%'
  } else if (placement.includes('right')) {
    styles.right = offset
    translateX = '50%'
  } else {
    styles.left = '50%'
    translateX = '-50%'
  }

  styles.transform = `translate(${translateX}, ${translateY})`

  return styles
}

export const Indicator = forwardRef<IndicatorProps, 'div'>((props, ref) => {
  const [styles, mergedProps] = useComponentStyle('Indicator', props)
  let {
    className,
    inline = false,
    placement = 'top-right',
    offset = 0,
    label,
    overflowCount = 99,
    showZero = true,
    children,
    isDisabled,
    ...rest
  } = omitThemeProps(mergedProps)

  const isNumeric = typeof label === 'number'

  if (isNumeric && !showZero && (label as number) <= 0) isDisabled ??= true

  const computedInline = useValue(inline)
  const computedPlacement = useValue(placement)
  const computedOffset = useValue(offset)

  const renderLabel = useMemo(() => {
    if (isNumeric) {
      if ((label as number) > overflowCount) {
        return (
          <>
            {overflowCount}
            <ui.span lineHeight={1}>+</ui.span>
          </>
        )
      } else {
        return label
      }
    } else {
      return label
    }
  }, [isNumeric, label, overflowCount])

  const css: CSSUIObject = {
    position: 'absolute',
    ...getPlacementStyle(computedPlacement, computedOffset),
    ...(isNumeric ? { fontWeight: 'medium' } : {}),
    ...styles,
  }

  return (
    <ui.div
      ref={ref}
      className={cx('ui-indicator-container', className)}
      __css={{ position: 'relative', display: computedInline ? 'inline-block' : 'block' }}
    >
      {!isDisabled ? (
        <ui.div ref={ref} className={cx('ui-indicator', className)} __css={css} {...rest}>
          {renderLabel}
        </ui.div>
      ) : null}

      {children}
    </ui.div>
  )
})
