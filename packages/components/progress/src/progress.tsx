import {
  ui,
  forwardRef,
  HTMLUIProps,
  ThemeProps,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  Interpolation,
  ColorModeToken,
  CSS,
} from '@yamada-ui/core'
import { useAnimation } from '@yamada-ui/use-animation'
import { createContext, cx, omitObject, valueToPercent } from '@yamada-ui/utils'
import { FC } from 'react'

const [ProgressProvider, useProgress] = createContext<
  Record<string, CSSUIObject>
>({
  name: `ProgressStylesContext`,
  errorMessage: `useProgress returned is 'undefined'. Seems you forgot to wrap the components in "<Progress />" `,
})

type ProgressOptions = {
  /**
   * The value of the progress.
   *
   * @default 0
   */
  value?: number
  /**
   * The minimum value of the progress.
   *
   * @default 0
   */
  min?: number
  /**
   * The maximum value of the progress.
   *
   * @default 100
   */
  max?: number
  /**
   * If `true`, the progress bar will show stripe.
   *
   * @default false
   */
  hasStripe?: boolean
  /**
   * If `true`, and hasStripe is `true`, the stripes will be animated.
   *
   * @default false
   */
  isStripeAnimation?: boolean
  /**
   * If `true`, the progress will be indeterminate and the `value` prop will be ignored.
   *
   * @default false
   */
  isAnimation?: boolean
  /**
   * The animation speed in seconds.
   *
   * @default '1.4s'
   */
  speed?: string | number
  /**
   * The CSS `color` property.
   */
  filledTrackColor?: ColorModeToken<CSS.Property.Color, 'colors'>
}

export type ProgressProps = HTMLUIProps<'div'> &
  ThemeProps<'Progress'> &
  ProgressOptions

export const Progress = forwardRef<ProgressProps, 'div'>((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle('Progress', props)
  const {
    className,
    children,
    value,
    min,
    max,
    hasStripe,
    isStripeAnimation,
    isAnimation,
    speed,
    borderRadius: _borderRadius,
    rounded,
    ...rest
  } = omitThemeProps(mergedProps)

  const borderRadius =
    _borderRadius ?? rounded ?? (styles.track.borderRadius as string | number)

  const css: CSSUIObject = {
    w: '100%',
    overflow: 'hidden',
    pos: 'relative',
    ...styles.track,
  }

  return (
    <ProgressProvider value={styles}>
      <ui.div
        ref={ref}
        className={cx('ui-progress', className)}
        __css={css}
        borderRadius={borderRadius}
        {...omitObject(rest, ['filledTrackColor'])}
      >
        <ProgressFilledTrack
          min={min}
          max={max}
          value={value}
          hasStripe={hasStripe}
          isStripeAnimation={isStripeAnimation}
          isAnimation={isAnimation}
          speed={speed}
          borderRadius={borderRadius}
        />
        {children}
      </ui.div>
    </ProgressProvider>
  )
})

type ProgressFilledTrackProps = HTMLUIProps<'div'> & ProgressProps

const ProgressFilledTrack: FC<ProgressFilledTrackProps> = ({
  value = 0,
  min = 0,
  max = 100,
  hasStripe,
  isStripeAnimation,
  isAnimation,
  speed = '1.4s',
  ...rest
}) => {
  const percent = valueToPercent(value, min, max)

  const styles = useProgress()

  const stripeAnimation = useAnimation({
    keyframes: {
      '0%': { bgPosition: '1rem 0' },
      '100%': { bgPosition: '0 0' },
    },
    duration: typeof speed === 'string' ? speed : `${speed}s`,
    iterationCount: 'infinite',
    timingFunction: 'linear',
  })

  const interpolationAnimation = useAnimation({
    keyframes: {
      '0%': { left: '-40%' },
      '100%': { left: '100%' },
    },
    duration: typeof speed === 'string' ? speed : `${speed}s`,
    iterationCount: 'infinite',
    timingFunction: 'ease',
  })

  isStripeAnimation = !isAnimation && hasStripe && isStripeAnimation

  const css: Interpolation<{}> = {
    ...(isStripeAnimation
      ? {
          animation: stripeAnimation,
        }
      : {}),
    ...(isAnimation
      ? {
          position: 'absolute',
          willChange: 'left',
          minWidth: '50%',
          animation: interpolationAnimation,
        }
      : {}),
  }

  const __css: CSSUIObject = {
    w: `${percent}%`,
    h: '100%',
    ...styles.filledTrack,
  }

  return <ui.div css={css} __css={__css} {...rest} />
}
