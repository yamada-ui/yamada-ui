import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  HTMLUIProps,
  ThemeProps,
  CSSUIObject,
  Token,
  UIProps,
} from '@yamada-ui/core'
import { useToken } from '@yamada-ui/use-token'
import { useValue } from '@yamada-ui/use-value'
import {
  cx,
  filterUndefined,
  findChildren,
  getValidChildren,
  omitChildren,
  pickChildren,
} from '@yamada-ui/utils'
import { cloneElement, FC } from 'react'
import {
  CarouselProvider,
  useCarousel,
  useCarouselContext,
  UseCarouselProps,
  Orientation,
  Align,
  ContainScroll,
} from './use-carousel'
import {
  CarouselControlNext,
  CarouselControlPrev,
  CarouselControlProps,
  CarouselIndicators,
  CarouselIndicatorsProps,
  CarouselSlide,
} from './'

type CarouselOptions = {
  orientation?: Token<Orientation>
  align?: Token<Align>
  containScroll?: Token<ContainScroll>
  slidesToScroll?: Token<number>
  dragFree?: Token<boolean>
  draggable?: Token<boolean>
  inViewThreshold?: Token<number>
  loop?: Token<boolean>
  skipSnaps?: Token<boolean>
  speed?: Token<number>
  delay?: Token<number>
  autoplay?: Token<boolean>
  stopMouseEnterAutoplay?: Token<boolean>
  includeGapInSize?: Token<boolean>
  slideSize?: UIProps['width']
  inner?: HTMLUIProps<'div'>
  control?: CarouselControlProps | false
  controlPrev?: CarouselControlProps
  controlNext?: CarouselControlProps
  indicators?: CarouselIndicatorsProps | false
}

export type CarouselProps = ThemeProps<'Carousel'> &
  Omit<HTMLUIProps<'div'>, 'onChange' | 'draggable'> &
  Pick<UseCarouselProps, 'index' | 'defaultIndex' | 'onChange' | 'onScrollProgress'> &
  CarouselOptions

export const Carousel = forwardRef<CarouselProps, 'div'>(
  ({ h, height, minH, minHeight, ...props }, ref) => {
    const orientation = useValue(props.orientation)
    const align = useValue(props.align)
    const autoplay = useValue(props.autoplay)
    const stopMouseEnterAutoplay = useValue(props.stopMouseEnterAutoplay)
    const loop = useValue(props.loop)
    const speed = useValue(props.speed)
    const delay = useValue(props.delay)
    const slidesToScroll = useValue(props.slidesToScroll)
    const draggable = useValue(props.draggable)
    const dragFree = useValue(props.dragFree)
    const inViewThreshold = useValue(props.inViewThreshold)
    const skipSnaps = useValue(props.skipSnaps)
    const containScroll = useValue(props.containScroll)
    const includeGapInSize = useValue(props.includeGapInSize)
    const gap = useToken('spaces', useValue(props.gap)) ?? useValue(props.gap)
    const slideSize = useToken('sizes', useValue(props.slideSize)) ?? useValue(props.slideSize)

    const styles = useMultiComponentStyle('Carousel', {
      ...props,
      orientation,
      align,
      autoplay,
      stopMouseEnterAutoplay,
      loop,
      speed,
      delay,
      slidesToScroll,
      draggable,
      dragFree,
      inViewThreshold,
      skipSnaps,
      containScroll,
      includeGapInSize,
      gap,
      slideSize,
    })
    const { className, inner, control, controlPrev, controlNext, indicators, ...computedProps } =
      omitThemeProps({
        ...props,
        orientation,
        align,
        autoplay,
        stopMouseEnterAutoplay,
        loop,
        speed,
        delay,
        slidesToScroll,
        draggable,
        dragFree,
        inViewThreshold,
        skipSnaps,
        containScroll,
        includeGapInSize,
        gap,
        slideSize,
      })

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

    h ??= height
    minH ??= minHeight

    return (
      <CarouselProvider value={{ styles, ...rest }}>
        <ui.div
          className={cx('ui-carousel', className)}
          __css={{ position: 'relative', h: 'fit-content', ...styles.container }}
          {...getContainerProps({}, ref)}
        >
          {customCarouselControlPrev ??
            (control !== false ? <CarouselControlPrev {...control} {...controlPrev} /> : null)}
          {customCarouselControlNext ??
            (control !== false ? <CarouselControlNext {...control} {...controlNext} /> : null)}

          <CarouselSlides {...getSlidesProps({ ...filterUndefined({ h, minH }), ...inner })}>
            {cloneSlideChildren}
          </CarouselSlides>

          {customCarouselIndicators ??
            (indicators !== false ? <CarouselIndicators {...indicators} /> : null)}

          {otherChildren}
        </ui.div>
      </CarouselProvider>
    )
  },
)

type CarouselSlidesProps = HTMLUIProps<'div'>

const CarouselSlides = forwardRef<CarouselSlidesProps, 'div'>(({ ...rest }, ref) => {
  const css: CSSUIObject = { w: '100%', h: 'fit-content', overflow: 'hidden' }

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
    display: 'flex',
    flexDirection: orientation === 'vertical' ? 'column' : 'row',
    ...styles.inner,
    ...(includeGapInSize ? { [orientation === 'vertical' ? 'mb' : 'mr']: `-${gap}` } : {}),
  }

  return <ui.div className='ui-carousel-sliders-inner' __css={css} {...rest} />
}
