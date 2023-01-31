import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  HTMLUIProps,
  ThemeProps,
} from '@yamada-ui/core'
import { cx, findChildren, getValidChildren, omitChildren, pickChildren } from '@yamada-ui/utils'
import {
  CarouselDescendantsContextProvider,
  CarouselProvider,
  useCarousel,
  useCarouselContext,
  UseCarouselProps,
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

  const { descendants, getContainerProps, getInnerProps, children, ...rest } = useCarousel({
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

  return (
    <CarouselDescendantsContextProvider value={descendants}>
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

          <CarouselSliders {...getInnerProps(inner)}>{slideChildren}</CarouselSliders>

          {customCarouselIndicators ??
            (indicators !== false ? <CarouselIndicators {...indicators} /> : null)}

          {otherChildren}
        </ui.div>
      </CarouselProvider>
    </CarouselDescendantsContextProvider>
  )
})

type CarouselSlidersProps = HTMLUIProps<'div'>

const CarouselSliders = forwardRef<CarouselSlidersProps, 'div'>(({ children, ...rest }, ref) => {
  const { orientation, styles } = useCarouselContext()

  return (
    <ui.div
      ref={ref}
      className='ui-carousel-sliders'
      __css={{ w: '100%', h: '100%', overflow: 'hidden' }}
    >
      <ui.div
        className='ui-carousel-sliders-inner'
        __css={{
          w: '100%',
          h: '100%',
          display: 'flex',
          flexDirection: orientation === 'vertical' ? 'column' : 'row',
          ...styles.inner,
        }}
        {...rest}
      >
        {children}
      </ui.div>
    </ui.div>
  )
})
