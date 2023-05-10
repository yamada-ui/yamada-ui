import {
  ui,
  forwardRef,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  useComponentStyle,
  CSSUIProps,
} from '@yamada-ui/core'
import { useAnimation } from '@yamada-ui/use-animation'
import { usePrevious } from '@yamada-ui/use-previous'
import { useValue } from '@yamada-ui/use-value'
import { cx, useIsMounted } from '@yamada-ui/utils'

type SkeletonOptions = {
  startColor?: CSSUIProps['color']
  endColor?: CSSUIProps['color']
  isLoaded?: boolean
  speed?: string | number
  fadeDuration?: string | number
}

export type SkeletonProps = HTMLUIProps<'div'> & ThemeProps<'Skeleton'> & SkeletonOptions

export const Skeleton = forwardRef<SkeletonProps, 'div'>((props, ref) => {
  let [styles, mergedProps] = useComponentStyle('Skeleton', props)
  const {
    className,
    startColor,
    endColor,
    fadeDuration = 0.4,
    speed = 0.8,
    isLoaded,
    ...rest
  } = omitThemeProps(mergedProps)
  const isMounted = useIsMounted()

  const prevIsLoaded = usePrevious(isLoaded)

  const computedStartColor = useValue(startColor)
  const computedEndColor = useValue(endColor)

  const fadeIn = useAnimation({
    keyframes: {
      '0%': {
        opacity: 0,
      },
      '100%': {
        opacity: 1,
      },
    },
    duration: typeof fadeDuration === 'string' ? fadeDuration : `${fadeDuration}s`,
  })

  const animation = useAnimation({
    keyframes: {
      '0%': {
        borderColor: computedStartColor,
        background: computedStartColor,
      },
      '100%': {
        borderColor: computedEndColor,
        background: computedEndColor,
      },
    },
    duration: typeof speed === 'string' ? speed : `${speed}s`,
    iterationCount: 'infinite',
    direction: 'alternate',
    timingFunction: 'linear',
  })

  const css: CSSUIObject = {
    w: 'full',
    h: '4',
    boxShadow: 'none',
    backgroundClip: 'padding-box',
    cursor: 'default',
    color: 'transparent',
    pointerEvents: 'none',
    userSelect: 'none',
    '&::before, &::after, *': {
      visibility: 'hidden',
    },
    ...styles,
  }

  if (isLoaded) {
    const animation = !isMounted.current || prevIsLoaded ? 'none' : fadeIn

    return (
      <ui.div ref={ref} className={cx('ui-skeleton', className)} {...rest} animation={animation} />
    )
  } else {
    return (
      <ui.div
        ref={ref}
        className={cx('ui-skeleton', className)}
        __css={css}
        {...rest}
        animation={animation}
      />
    )
  }
})
