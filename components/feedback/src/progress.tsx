import {
  ui,
  forwardRef,
  HTMLUIProps,
  ThemeProps,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  Interpolation,
  useAnimation,
} from '@yamada-ui/system'
import { createContext, cx } from '@yamada-ui/utils'
import { FC } from 'react'

const [ProgressProvider, useProgress] = createContext<Record<string, CSSUIObject>>({
  name: `ProgressStylesContext`,
  errorMessage: `useProgress returned is 'undefined'. Seems you forgot to wrap the components in "<Progress />" `,
})

export { useProgress }

type ProgressOptions = {
  value?: number
  min?: number
  max?: number
  hasStripe?: boolean
  isStripeAnimation?: boolean
  isAnimation?: boolean
  speed?: string | number
}

export type ProgressProps = HTMLUIProps<'div'> & ThemeProps<'Progress'> & ProgressOptions

export const Progress = forwardRef<ProgressProps, 'div'>((props, ref) => {
  const styles = useMultiComponentStyle('Progress', props)
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
  } = omitThemeProps(props)

  const borderRadius =
    _borderRadius ?? rounded ?? (styles.container.borderRadius as string | number)

  const css: CSSUIObject = {
    w: '100%',
    overflow: 'hidden',
    pos: 'relative',
    ...styles.container,
  }

  return (
    <ProgressProvider value={styles}>
      <ui.div
        ref={ref}
        className={cx('ui-progress', className)}
        __css={css}
        borderRadius={borderRadius}
        {...rest}
      >
        <ProgressInner
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

const valueToPercent = (value: number, min: number, max: number) =>
  ((value - min) * 100) / (max - min)

type ProgressInnerProps = HTMLUIProps<'div'> & ProgressProps

const ProgressInner: FC<ProgressInnerProps> = ({
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
    ...styles.inner,
  }

  return <ui.div css={css} __css={__css} {...rest} />
}
