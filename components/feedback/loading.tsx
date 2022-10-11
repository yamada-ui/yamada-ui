import { useMemo } from 'react'
import {
  Oval,
  Grid,
  Hearts,
  Radio,
  Audio,
  BallTriangle,
  Bars,
  Comment,
  MagnifyingGlass,
  ThreeCircles,
  ThreeDots,
  Triangle,
  Watch,
  RotatingLines,
  ProgressBar,
} from 'react-loader-spinner'
import { useBreakpointValue, useSchemetValue, useSize, useColor } from '../../hooks'
import { forwardRef, ui } from '../../system'
import { HTMLUIProps, CSSUIProps } from '../../types'
import { cx, isObject, isArray } from '../../utils'

type Variant =
  | 'oval'
  | 'grid'
  | 'hearts'
  | 'radio'
  | 'audio'
  | 'balls'
  | 'bars'
  | 'rotating'
  | 'comment'
  | 'search'
  | 'circles'
  | 'dots'
  | 'triangle'
  | 'watch'
  | 'progress'

type LoadingOptions = {
  variant?: Variant
  color?: CSSUIProps['color']
  secondaryColor?: CSSUIProps['color']
  size?: CSSUIProps['boxSize']
}

export type LoadingProps = HTMLUIProps<'div'> & LoadingOptions

export const Loading = forwardRef<LoadingProps, 'div'>(
  (
    {
      className,
      variant = 'oval',
      color: propsColor = 'primary',
      secondaryColor: propsSecondaryColor,
      size: propsSize = '1em',
      ...rest
    },
    ref,
  ) => {
    const _color = useMemo(
      () =>
        isObject(propsColor)
          ? useBreakpointValue(propsColor as any)
          : isArray(propsColor)
          ? useSchemetValue(...(propsColor as unknown as [any, any]))
          : propsColor,
      [propsColor],
    )
    const _secondaryColor = useMemo(
      () =>
        isObject(propsSecondaryColor)
          ? useBreakpointValue(propsSecondaryColor as any)
          : isArray(propsSecondaryColor)
          ? useSchemetValue(...(propsSecondaryColor as unknown as [any, any]))
          : propsSecondaryColor,
      [propsSecondaryColor],
    )
    const _size = useMemo(
      () =>
        isObject(propsSize)
          ? useBreakpointValue(propsSize as any)
          : isArray(propsSize)
          ? useSchemetValue(...(propsSize as unknown as [any, any]))
          : propsSize,
      [propsSize],
    )

    const color = useColor(_color) ?? _color
    const secondaryColor = useColor(_secondaryColor) ?? _secondaryColor
    const width = useSize(_size) ?? _size
    const height = useSize(_size) ?? _size

    const css = { '& > *': { padding: '0 !important' } }

    const animation = useMemo(() => {
      switch (variant) {
        case 'hearts':
          return <Hearts color={color} width={width} height={height} />

        case 'radio':
          return <Radio colors={[color, color, color]} width={width} height={height} />

        case 'audio':
          return <Audio color={color} width={width} height={height} />

        case 'balls':
          return <BallTriangle color={color} width={width} height={height} />

        case 'bars':
          return <Bars color={color} width={width} height={height} />

        case 'comment':
          return (
            <Comment
              color={secondaryColor ?? '#f6f6f6'}
              backgroundColor={color}
              width={width}
              height={height}
            />
          )

        case 'search':
          return (
            <MagnifyingGlass
              color={color}
              glassColor={'transparent'}
              width={width}
              height={height}
            />
          )

        case 'grid':
          return <Grid color={color} width={width} height={height} />

        case 'rotating':
          return <RotatingLines strokeColor={color} animationDuration={'1'} width={width} />

        case 'circles':
          return <ThreeCircles color={color} width={width} height={height} />

        case 'dots':
          return <ThreeDots color={color} width={width} height={height} />

        case 'triangle':
          return <Triangle color={color} width={width} height={height} />

        case 'watch':
          return <Watch color={color} width={width} height={height} />

        case 'progress':
          return (
            <ProgressBar
              barColor={color}
              borderColor={secondaryColor ?? color}
              width={width}
              height={height}
            />
          )

        default:
          return (
            <Oval
              color={color}
              secondaryColor={secondaryColor ?? color}
              width={width}
              height={height}
            />
          )
      }
    }, [color, height, secondaryColor, variant, width])

    return (
      // @ts-ignore
      <ui.div ref={ref} className={cx('ui-loading', className)} __css={css} {...rest}>
        {animation}
      </ui.div>
    )
  },
)
