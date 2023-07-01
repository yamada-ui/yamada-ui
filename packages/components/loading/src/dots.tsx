import { forwardRef } from '@yamada-ui/core'
import { Icon, IconProps } from '@yamada-ui/icon'

export type DotsProps = IconProps & {
  /**
   * The CSS `dur` property.
   *
   * @default '1s'
   */
  duration?: IconProps['dur']
}

export const Dots = forwardRef<DotsProps, 'svg'>(({ color, duration = '1s', ...rest }, ref) => {
  return (
    <Icon ref={ref} viewBox='0 0 120 30' fill={color} {...rest}>
      <circle cx='15' cy='15' r='15'>
        <animate
          attributeName='r'
          from='15'
          to='15'
          begin='0s'
          dur={duration}
          values='15;9;15'
          calcMode='linear'
          repeatCount='indefinite'
        />
        <animate
          attributeName='fill-opacity'
          from='1'
          to='1'
          begin='0s'
          dur={duration}
          values='1;.5;1'
          calcMode='linear'
          repeatCount='indefinite'
        />
      </circle>
      <circle cx='60' cy='15' r='9' fillOpacity='0.3'>
        <animate
          attributeName='r'
          from='9'
          to='9'
          begin='0s'
          dur={duration}
          values='9;15;9'
          calcMode='linear'
          repeatCount='indefinite'
        />
        <animate
          attributeName='fill-opacity'
          from='0.5'
          to='0.5'
          begin='0s'
          dur={duration}
          values='.5;1;.5'
          calcMode='linear'
          repeatCount='indefinite'
        />
      </circle>
      <circle cx='105' cy='15' r='15'>
        <animate
          attributeName='r'
          from='15'
          to='15'
          begin='0s'
          dur={duration}
          values='15;9;15'
          calcMode='linear'
          repeatCount='indefinite'
        />
        <animate
          attributeName='fill-opacity'
          from='1'
          to='1'
          begin='0s'
          dur={duration}
          values='1;.5;1'
          calcMode='linear'
          repeatCount='indefinite'
        />
      </circle>
    </Icon>
  )
})
