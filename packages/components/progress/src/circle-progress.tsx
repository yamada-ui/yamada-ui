import { ui, forwardRef, HTMLUIProps, CSSUIObject, CSSUIProps, StylesProps } from '@yamada-ui/core'
import { useAnimation } from '@yamada-ui/use-animation'
import { useToken } from '@yamada-ui/use-token'
import { useValue } from '@yamada-ui/use-value'
import { cx, valueToPercent } from '@yamada-ui/utils'

type CircleProgressOptions = {
  /**
   * The CSS `box-size` property.
   *
   * @default '6rem'
   */
  size?: CSSUIProps['boxSize']
  /**
   * The CSS `width` property.
   *
   * @default '0.625ewm'
   */
  thickness?: CSSUIProps['width']
  /**
   * The CSS `color` property.
   *
   * @default 'primary'
   */
  color?: CSSUIProps['color']
  /**
   * The CSS `color` property.
   *
   * @default 'border'
   */
  trackColor?: CSSUIProps['color']
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
   * If `true`, the cap of the progress indicator will be rounded.
   *
   * @default false
   */
  isRounded?: boolean
  /**
   * If `true`, the progress will be indeterminate and the `value` prop will be ignored.
   *
   * @default false
   */
  isAnimation?: boolean
  /**
   * The animation speed in seconds.
   *
   * @default '[1.4s, 2s]'
   */
  speed?: [string | number, string | number]
}

export type CircleProgressProps = Omit<HTMLUIProps<'div'>, 'color'> & CircleProgressOptions

export const CircleProgress = forwardRef<CircleProgressProps, 'div'>(
  (
    {
      className,
      children,
      size = '6rem',
      thickness = '0.625rem',
      color = 'primary',
      trackColor = 'border',
      value = 0,
      min = 0,
      max = 100,
      isAnimation = false,
      isRounded,
      speed = ['1.4s', '2s'],
      ...rest
    },
    ref,
  ) => {
    size = (useToken('sizes', useValue(size)) ?? size) as string | number
    thickness = (useToken('sizes', useValue(thickness)) ?? thickness) as string | number

    const isTransparent = value === 0 && !isAnimation
    const percent = valueToPercent(value, min, max)

    const interval = !isAnimation ? percent * 2.64 : undefined

    const animation = useAnimation({
      keyframes: {
        '0%': {
          strokeDasharray: '1, 400',
          strokeDashoffset: '0',
        },
        '50%': {
          strokeDasharray: '400, 400',
          strokeDashoffset: '-100',
        },
        '100%': {
          strokeDasharray: '400, 400',
          strokeDashoffset: '-260',
        },
      } as Record<string, StylesProps<'unResponsive', 'unColorMode'>>,
      duration: typeof speed[0] === 'string' ? speed[0] : `${speed[0]}s`,
      iterationCount: 'infinite',
      timingFunction: 'linear',
    })

    const css: CSSUIObject = {
      display: 'inline-block',
      position: 'relative',
      verticalAlign: 'middle',
      fontSize: size,
    }

    const props: CircleProps = isAnimation
      ? {
          animation,
        }
      : {
          strokeDashoffset: 66,
          strokeDasharray: interval == null ? undefined : `${interval} ${264 - interval}`,
          transitionProperty: 'stroke-dasharray, stroke',
          transitionDuration: '0.6s',
          transitionTimingFunction: 'ease',
        }

    return (
      <ui.div ref={ref} className={cx('ui-circle-progress', className)} __css={css} {...rest}>
        <Shape size={size} isAnimation={isAnimation} speed={speed}>
          <Circle stroke={trackColor} strokeWidth={thickness} />
          <Circle
            stroke={color}
            strokeWidth={thickness}
            strokeLinecap={isRounded ? 'round' : undefined}
            opacity={isTransparent ? 0 : undefined}
            {...props}
          />
        </Shape>
        {children}
      </ui.div>
    )
  },
)

type CircleProps = HTMLUIProps<'circle'>

const Circle = (rest: CircleProps) => (
  <ui.circle cx={50} cy={50} r={42} fill='transparent' {...rest} />
)

type ShapeProps = Omit<HTMLUIProps<'svg'>, 'speed'> &
  Pick<Required<CircleProgressProps>, 'children' | 'size' | 'isAnimation' | 'speed'>

const Shape = ({ size, isAnimation, speed, ...rest }: ShapeProps) => {
  const animation = useAnimation({
    keyframes: {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
    duration: typeof speed[1] === 'string' ? speed[1] : `${speed[1]}s`,
    iterationCount: 'infinite',
    timingFunction: 'linear',
  })

  const css: CSSUIObject = {
    display: 'block',
    boxSize: size,
    ...(isAnimation ? { animation } : {}),
  }

  return <ui.svg viewBox='0 0 100 100' __css={css} {...rest} />
}

export const CircleProgressLabel = ui('span', {
  baseStyle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    fontSize: '0.25em',
    textAlign: 'center',
  },
})
