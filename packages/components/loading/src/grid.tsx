import { forwardRef } from '@yamada-ui/core'
import { Icon, IconProps } from '@yamada-ui/icon'

export type GridProps = IconProps & {
  duration?: IconProps['dur']
}

export const Grid = forwardRef<GridProps, 'svg'>(({ color, duration = '1s', ...rest }, ref) => {
  return (
    <Icon ref={ref} viewBox='0 0 105 105' fill={color} {...rest}>
      <circle cx='12.5' cy='12.5' r='12.5'>
        <animate
          attributeName='fill-opacity'
          begin='0s'
          dur={duration}
          values='1;.2;1'
          calcMode='linear'
          repeatCount='indefinite'
        />
      </circle>
      <circle cx='12.5' cy='52.5' r='12.5' fillOpacity='.5'>
        <animate
          attributeName='fill-opacity'
          begin='100ms'
          dur={duration}
          values='1;.2;1'
          calcMode='linear'
          repeatCount='indefinite'
        />
      </circle>
      <circle cx='52.5' cy='12.5' r='12.5'>
        <animate
          attributeName='fill-opacity'
          begin='300ms'
          dur={duration}
          values='1;.2;1'
          calcMode='linear'
          repeatCount='indefinite'
        />
      </circle>
      <circle cx='52.5' cy='52.5' r='12.5'>
        <animate
          attributeName='fill-opacity'
          begin='600ms'
          dur={duration}
          values='1;.2;1'
          calcMode='linear'
          repeatCount='indefinite'
        />
      </circle>
      <circle cx='92.5' cy='12.5' r='12.5'>
        <animate
          attributeName='fill-opacity'
          begin='800ms'
          dur={duration}
          values='1;.2;1'
          calcMode='linear'
          repeatCount='indefinite'
        />
      </circle>
      <circle cx='92.5' cy='52.5' r='12.5'>
        <animate
          attributeName='fill-opacity'
          begin='400ms'
          dur={duration}
          values='1;.2;1'
          calcMode='linear'
          repeatCount='indefinite'
        />
      </circle>
      <circle cx='12.5' cy='92.5' r='12.5'>
        <animate
          attributeName='fill-opacity'
          begin='700ms'
          dur={duration}
          values='1;.2;1'
          calcMode='linear'
          repeatCount='indefinite'
        />
      </circle>
      <circle cx='52.5' cy='92.5' r='12.5'>
        <animate
          attributeName='fill-opacity'
          begin='500ms'
          dur={duration}
          values='1;.2;1'
          calcMode='linear'
          repeatCount='indefinite'
        />
      </circle>
      <circle cx='92.5' cy='92.5' r='12.5'>
        <animate
          attributeName='fill-opacity'
          begin='200ms'
          dur={duration}
          values='1;.2;1'
          calcMode='linear'
          repeatCount='indefinite'
        />
      </circle>
    </Icon>
  )
})
