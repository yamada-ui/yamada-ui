import {
  ui,
  forwardRef,
  HTMLUIProps,
  CSSUIObject,
  UIProps,
} from '@yamada-ui/core'
import { cx } from '@yamada-ui/utils'
import {
  useCarouselContext,
  useCarouselSlide,
  UseCarouselSlideProps,
} from './use-carousel'

type CarouselSlideOptions = {
  /**
   * The CSS `width` property.
   */
  size?: UIProps['width']
}

export type CarouselSlideProps = HTMLUIProps<'div'> &
  UseCarouselSlideProps &
  CarouselSlideOptions

export const CarouselSlide = forwardRef<CarouselSlideProps, 'div'>(
  ({ className, size, ...rest }, ref) => {
    const { slideSize, includeGapInSize, orientation, gap } =
      useCarouselContext()

    const { getSlideProps } = useCarouselSlide(rest)

    size ??= slideSize

    const css: CSSUIObject = {
      position: 'relative',
      flex: `0 0 ${size}`,
      ...(includeGapInSize
        ? { [orientation === 'vertical' ? 'pb' : 'pr']: gap }
        : { [orientation === 'vertical' ? 'mb' : 'mr']: gap }),
    }

    return (
      <ui.div
        className={cx('ui-carousel__slide', className)}
        __css={css}
        {...getSlideProps({})}
      >
        <CarouselSlideInner ref={ref} {...rest} />
      </ui.div>
    )
  },
)

type CarouselSlideInnerProps = HTMLUIProps<'div'>

const CarouselSlideInner = forwardRef<CarouselSlideInnerProps, 'div'>(
  ({ ...rest }, ref) => {
    return (
      <ui.div
        ref={ref}
        className='ui-carousel__slide__inner'
        w='100%'
        h='100%'
        {...rest}
      />
    )
  },
)
