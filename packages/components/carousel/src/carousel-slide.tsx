import { ui, forwardRef, HTMLUIProps, CSSUIObject, UIProps } from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import { useCarouselContext, useCarouselSlide, UseCarouselSlideProps } from './use-carousel'

type CarouselSlideOptions = {
  size?: UIProps['width']
}

export type CarouselSlideProps = HTMLUIProps<'div'> & UseCarouselSlideProps & CarouselSlideOptions

export const CarouselSlide = forwardRef<CarouselSlideProps, 'div'>(
  ({ className, size, ...rest }, ref) => {
    const { slideSize, loop, orientation, gap, styles } = useCarouselContext()

    const { getSlideProps } = useCarouselSlide(rest)

    size ??= slideSize

    const css: CSSUIObject = {
      flex: `0 0 ${size}`,
      ...styles.slide,
      ...(loop
        ? { [orientation === 'vertical' ? 'mb' : 'mr']: gap }
        : { _notLast: { [orientation === 'vertical' ? 'mb' : 'mr']: gap } }),
    }

    return (
      <ui.div
        className={cx('ui-carousel-slide', className)}
        __css={css}
        {...getSlideProps(rest, ref)}
      />
    )
  },
)
