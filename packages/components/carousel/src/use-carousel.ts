import { IconButtonProps } from '@yamada-ui/button'
import { CSSUIObject, HTMLUIProps, layoutStylesProperties, UIProps } from '@yamada-ui/core'
import { useControllableState } from '@yamada-ui/use-controllable-state'
import { createDescendant } from '@yamada-ui/use-descendant'
import {
  createContext,
  dataAttr,
  handlerAll,
  mergeRefs,
  PropGetter,
  RequiredPropGetter,
  splitObject,
  useUpdateEffect,
} from '@yamada-ui/utils'
import useEmblaCarousel from 'embla-carousel-react'
import {
  Children,
  CSSProperties,
  Dispatch,
  MouseEvent,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

export const {
  DescendantsContextProvider: CarouselDescendantsContextProvider,
  useDescendantsContext: useCarouselDescendantsContext,
  useDescendants: useCarouselDescendants,
  useDescendant: useCarouselDescendant,
} = createDescendant<HTMLElement>()

type CarouselContext = Omit<UseCarouselProps, 'index' | 'defaultIndex' | 'onChange'> & {
  selectedIndex: number
  setSelectedIndex: Dispatch<SetStateAction<number>>
  onPrev: () => void
  onNext: () => void
  styles: Record<string, CSSUIObject>
}

export const [CarouselProvider, useCarouselContext] = createContext<CarouselContext>({
  name: 'CarouselContext',
  errorMessage: `useCarouselContext returned is 'undefined'. Seems you forgot to wrap the components in "<Carousel />"`,
})

export type UseCarouselProps = HTMLUIProps<'div'> & {
  index?: number
  defaultIndex?: number
  onChange?: (index: number) => void
  orientation?: 'vertical' | 'horizontal'
  slideSize?: UIProps['width']
  align?: 'start' | 'center' | 'end' | number
  containScroll?: '' | 'trimSnaps' | 'keepSnaps'
  slidesToScroll?: 'auto' | number
  dragFree?: boolean
  draggable?: boolean
  inViewThreshold?: number
  loop?: boolean
  skipSnaps?: boolean
  speed?: number
  delay?: number
  autoplay?: boolean
  stopMouseEnterAutoplay?: boolean
  onScrollProgress?: (progress: number) => void
}

export const useCarousel = ({
  index,
  defaultIndex = 0,
  onChange,
  align = 'center',
  orientation = 'horizontal',
  autoplay = false,
  stopMouseEnterAutoplay = true,
  loop = true,
  speed = 10,
  delay = 4000,
  gap = 'md',
  slidesToScroll = 1,
  draggable = true,
  dragFree = false,
  inViewThreshold = 0,
  skipSnaps = false,
  containScroll = '',
  slideSize = '100%',
  onScrollProgress,
  children,
  ...rest
}: UseCarouselProps) => {
  const descendants = useCarouselDescendants()

  const computedProps = splitObject(rest, layoutStylesProperties)

  const [selectedIndex, setSelectedIndex] = useControllableState({
    value: index,
    defaultValue: defaultIndex,
    onChange,
  })

  const isVertical = orientation === 'vertical'

  const [emblaRef, embla] = useEmblaCarousel({
    axis: isVertical ? 'y' : 'x',
    startIndex: defaultIndex,
    loop,
    align,
    slidesToScroll,
    draggable,
    dragFree,
    speed,
    inViewThreshold,
    skipSnaps,
    containScroll,
  })

  const [count, setCount] = useState<number>(0)
  const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false)

  const timeoutId = useRef<any>(undefined)

  const onPrev = useCallback(() => {
    const prev = descendants.enabledPrevValue(selectedIndex)

    if (prev) setSelectedIndex(prev.index)
  }, [descendants, selectedIndex, setSelectedIndex])

  const onNext = useCallback(() => {
    const next = descendants.enabledNextValue(selectedIndex)

    if (next) setSelectedIndex(next.index)
  }, [descendants, selectedIndex, setSelectedIndex])

  const onScroll = useCallback(() => {
    if (!embla) return

    const progress = Math.round(Math.max(0, Math.min(1, embla.scrollProgress())) * 100)

    onScrollProgress?.(progress)
  }, [embla, onScrollProgress])

  const onSelect = useCallback(() => {
    if (!embla) return

    const index = embla.selectedScrollSnap()

    setSelectedIndex(index)
  }, [embla, setSelectedIndex])

  useEffect(() => {
    const last = descendants.enabledlastValue()

    const isStop = isMouseEnter && stopMouseEnterAutoplay
    const isLast = !loop && selectedIndex === last?.index

    if (autoplay && !isStop && !isLast) {
      timeoutId.current = setInterval(onNext, delay)
    } else {
      if (timeoutId.current) clearInterval(timeoutId.current)

      timeoutId.current = undefined
    }

    return () => {
      if (timeoutId.current) clearInterval(timeoutId.current)
    }
  }, [
    autoplay,
    onNext,
    delay,
    stopMouseEnterAutoplay,
    isMouseEnter,
    descendants,
    loop,
    selectedIndex,
  ])

  useUpdateEffect(() => {
    if (!embla) return

    embla.scrollTo(selectedIndex)
  }, [selectedIndex])

  useUpdateEffect(() => {
    if (!embla) return

    embla.reInit()

    setCount(embla.scrollSnapList().length)
  }, [Children.toArray(children).length])

  useUpdateEffect(() => {
    if (!embla) return

    setCount(embla.scrollSnapList().length)
  }, [embla])

  useUpdateEffect(() => {
    if (embla) {
      embla.on('select', onSelect)
      embla.on('scroll', onScroll)

      onScroll()

      return () => {
        embla.off('select', onSelect)
        embla.off('scroll', onScroll)
      }
    }
  }, [embla, onScroll])

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...computedProps[0],
      ...props,
      ref,
      onMouseEnter: handlerAll(props.onMouseEnter, () => {
        setIsMouseEnter(true)
      }),
      onMouseLeave: handlerAll(props.onMouseLeave, () => {
        setIsMouseEnter(false)
      }),
    }),
    [computedProps],
  )

  const getInnerProps: PropGetter = useCallback(
    (props = {}) => ({
      ...computedProps[1],
      ...props,
      ref: emblaRef,
    }),
    [computedProps, emblaRef],
  )

  return {
    descendants,
    children,
    count,
    selectedIndex,
    setSelectedIndex,
    orientation,
    gap,
    loop,
    align,
    slidesToScroll,
    draggable,
    dragFree,
    speed,
    inViewThreshold,
    skipSnaps,
    containScroll,
    slideSize,
    onPrev,
    onNext,
    getContainerProps,
    getInnerProps,
  }
}

export type UseCarouselReturn = ReturnType<typeof useCarousel>

export type UseCarouselSlideProps = {
  hidden?: boolean
}

export const useCarouselSlide = ({ hidden: disabled }: UseCarouselSlideProps) => {
  const { selectedIndex } = useCarouselContext()
  const { index, register } = useCarouselDescendant({ disabled })

  const isSelected = index === selectedIndex

  const getSlideProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      const style: CSSProperties = {
        border: '0px',
        clip: 'rect(0px, 0px, 0px, 0px)',
        height: '1px',
        width: '1px',
        margin: '-1px',
        padding: '0px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'absolute',
        ...props.style,
      }

      return {
        ...props,
        ref: mergeRefs(register, ref),
        role: 'carousel-slide',
        'data-hidden': dataAttr(disabled),
        'data-selected': dataAttr(isSelected),
        style: disabled ? style : undefined,
      }
    },
    [register, disabled, isSelected],
  )

  return { getSlideProps }
}

export type UseCarouselSlideReturn = ReturnType<typeof useCarouselSlide>

export type UseCarouselControlProps = IconButtonProps & {
  operation: 'prev' | 'next'
}

export const useCarouselControl = ({ operation, ...rest }: UseCarouselControlProps) => {
  const descendants = useCarouselDescendantsContext()
  const { selectedIndex, onPrev, onNext, loop } = useCarouselContext()

  const [disabled, setDisabled] = useState<boolean>(rest.disabled ?? rest.isDisabled ?? false)

  const isPrev = operation === 'prev'

  useEffect(() => {
    if (loop) return

    if (isPrev) {
      const first = descendants.enabledfirstValue()

      setDisabled(first?.index === selectedIndex)
    } else {
      const last = descendants.enabledlastValue()

      setDisabled(last?.index === selectedIndex)
    }
  }, [loop, descendants, isPrev, selectedIndex])

  const getControlProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ref,
      disabled,
      role: 'carousel-control',
      onClick: handlerAll(props.onClick, isPrev ? onPrev : onNext),
    }),
    [disabled, isPrev, onNext, onPrev],
  )

  return { getControlProps }
}

export type UseCarouselControlReturn = ReturnType<typeof useCarouselControl>

export const useCarouselIndicators = () => {
  const descendants = useCarouselDescendantsContext()
  const { selectedIndex, setSelectedIndex } = useCarouselContext()

  const enabledValues = descendants.enabledValues()
  const indexes = enabledValues.map(({ index }) => index)

  const onClick = useCallback(
    (ev: MouseEvent, index: number) => {
      ev.stopPropagation()

      setSelectedIndex(index)
    },
    [setSelectedIndex],
  )

  const getIndicatorProps: RequiredPropGetter<{ index: number }> = useCallback(
    ({ index, ...props } = {}) => {
      const isSelected = index === selectedIndex

      return {
        ...props,
        key: index,
        role: 'carousel-indicator',
        'data-index': index,
        'data-selected': dataAttr(isSelected),
        onClick: handlerAll(props.onClick, (ev) => onClick(ev, index)),
      }
    },
    [onClick, selectedIndex],
  )

  return { indexes, getIndicatorProps }
}

export type UseCarouselIndicatorsReturn = ReturnType<typeof useCarouselIndicators>
