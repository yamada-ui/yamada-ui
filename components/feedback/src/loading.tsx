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
import {
  ui,
  forwardRef,
  HTMLUIProps,
  CSSUIProps,
  useValue,
  useSize,
  useColor,
} from '@yamada-ui/system'
import { cx } from '@yamada-ui/utils'

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
      color: _color = 'primary',
      secondaryColor: _secondaryColor,
      size: _size = '1em',
      ...rest
    },
    ref,
  ) => {
    const color = useMemo(() => useColor(useValue(_color) as string) ?? _color, [_color])
    const secondaryColor = useMemo(
      () => useColor(useValue(_secondaryColor) as string) ?? _secondaryColor,
      [_secondaryColor],
    )
    const width = useMemo(() => useSize(useValue(_size) as string) ?? _size, [_size])
    const height = useMemo(() => useSize(useValue(_size) as string) ?? _size, [_size])

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
      <ui.div ref={ref} className={cx('ui-loading', className)} __css={css} {...rest}>
        {animation}
      </ui.div>
    )
  },
)
