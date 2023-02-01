import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  HTMLUIProps,
  ThemeProps,
  CSSUIObject,
} from '@yamada-ui/core'
import { cx, findChildren, getValidChildren, omitChildren, pickChildren } from '@yamada-ui/utils'
import { cloneElement, FC } from 'react'
import { CarouselProvider, useCarousel, useCarouselContext, UseCarouselProps } from './use-carousel'
import {
  CarouselControlNext,
  CarouselControlPrev,
  CarouselControlProps,
  CarouselIndicators,
  CarouselIndicatorsProps,
  CarouselSlide,
} from './'

type CarouselOptions = {
  inner?: HTMLUIProps<'div'>
  control?: CarouselControlProps | false
  controlPrev?: CarouselControlProps
  controlNext?: CarouselControlProps
  indicators?: CarouselIndicatorsProps | false
}

export type CarouselProps = ThemeProps<'Carousel'> & UseCarouselProps & CarouselOptions

export const Carousel = forwardRef<CarouselProps, 'div'>((props, ref) => {
  const styles = useMultiComponentStyle('Carousel', props)
  const { className, inner, control, controlPrev, controlNext, indicators, ...computedProps } =
    omitThemeProps(props)

  const { getContainerProps, getSlidesProps, children, ...rest } = useCarousel({
    ...computedProps,
  })

  const validChildren = getValidChildren(children)

  const [customCarouselControlPrev] = findChildren(validChildren, CarouselControlPrev)
  const [customCarouselControlNext] = findChildren(validChildren, CarouselControlNext)
  const [customCarouselIndicators] = findChildren(validChildren, CarouselIndicators)
  const slideChildren = pickChildren(validChildren, CarouselSlide)
  const otherChildren = omitChildren(
    validChildren,
    CarouselControlPrev,
    CarouselControlNext,
    CarouselIndicators,
    CarouselSlide,
  )

  const cloneSlideChildren = slideChildren.map((child, index) => cloneElement(child, { index }))

  return (
    <CarouselProvider value={{ styles, ...rest }}>
      <ui.div
        className={cx('ui-carousel', className)}
        __css={{ position: 'relative', ...styles.container }}
        {...getContainerProps({}, ref)}
      >
        {customCarouselControlPrev ??
          (control !== false ? <CarouselControlPrev {...control} {...controlPrev} /> : null)}
        {customCarouselControlNext ??
          (control !== false ? <CarouselControlNext {...control} {...controlNext} /> : null)}

        <CarouselSlides {...getSlidesProps(inner)}>{cloneSlideChildren}</CarouselSlides>

        {customCarouselIndicators ??
          (indicators !== false ? <CarouselIndicators {...indicators} /> : null)}

        {otherChildren}
      </ui.div>
    </CarouselProvider>
  )
})

type CarouselSlidesProps = HTMLUIProps<'div'>

const CarouselSlides = forwardRef<CarouselSlidesProps, 'div'>(({ ...rest }, ref) => {
  const css: CSSUIObject = { w: '100%', h: '100%', overflow: 'hidden' }

  return (
    <ui.div ref={ref} className='ui-carousel-sliders' __css={css}>
      <CarouselSlidesInner {...rest} />
    </ui.div>
  )
})

type CarouselSlidesInnerProps = HTMLUIProps<'div'>

const CarouselSlidesInner: FC<CarouselSlidesInnerProps> = ({ ...rest }) => {
  const { orientation, includeGapInSize, gap, styles } = useCarouselContext()

  const css: CSSUIObject = {
    h: '100%',
    display: 'flex',
    flexDirection: orientation === 'vertical' ? 'column' : 'row',
    ...styles.inner,
    ...(includeGapInSize ? { [orientation === 'vertical' ? 'mb' : 'mr']: `-${gap}` } : {}),
  }

  return <ui.div className='ui-carousel-sliders-inner' __css={css} {...rest} />
}
