import { ui, forwardRef, HTMLUIProps, CSSUIObject } from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import { FC, cloneElement, ReactElement } from 'react'
import { useCarouselContext, useCarouselIndicators } from './use-carousel'

type CarouselIndicatorsOptions = { component?: FC<{ index: number }> }

export type CarouselIndicatorsProps = Omit<HTMLUIProps<'div'>, 'children'> &
  CarouselIndicatorsOptions

export const CarouselIndicators = forwardRef<CarouselIndicatorsProps, 'div'>(
  ({ className, component = CarouselIndicator, ...rest }, ref) => {
    const { orientation, styles } = useCarouselContext()

    const { indexes, getIndicatorProps } = useCarouselIndicators()

    const cloneChildren: (ReactElement | null)[] = indexes.map((index) => {
      const child = component({ index })

      if (!child) return null

      const props = getIndicatorProps({ ...child.props, index })

      return cloneElement(child, props)
    })

    const css: CSSUIObject = {
      position: 'absolute',
      zIndex: 'kurillin',
      display: 'grid',
      ...styles.indicators,
      ...(orientation === 'vertical'
        ? {
            gridTemplateRows: `repeat(${indexes.length}, 1fr)`,
          }
        : {
            gridTemplateColumns: `repeat(${indexes.length}, 1fr)`,
          }),
    }

    return (
      <ui.div ref={ref} className={cx('ui-carousel-indicators', className)} __css={css} {...rest}>
        {cloneChildren}
      </ui.div>
    )
  },
)

type CarouselIndicatorProps = HTMLUIProps<'button'>

const CarouselIndicator: FC<CarouselIndicatorProps> = ({ className, ...rest }) => {
  const { styles } = useCarouselContext()

  const css: CSSUIObject = { ...styles.indicator }

  return (
    <ui.button
      type='button'
      tabIndex={-1}
      className={cx('ui-carousel-indicator', className)}
      __css={css}
      {...rest}
    />
  )
}
