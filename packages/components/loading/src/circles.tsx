import { forwardRef } from '@yamada-ui/core'
import { Icon, IconProps } from '@yamada-ui/icon'

export type CirclesProps = Omit<IconProps, 'color'> & {
  color?: string
  duration?: IconProps['dur']
}

export const Circles = forwardRef<CirclesProps, 'svg'>(({ color, duration = '3s', ...rest }) => {
  return (
    <Icon viewBox='0 0 58 58' stroke={color} {...rest}>
      <g fill='none' fillRule='evenodd'>
        <g transform='translate(2 1)' stroke={color} strokeWidth='1.5'>
          <circle cx='42.601' cy='11.462' r='5' fillOpacity='1' fill={color}>
            <animate
              attributeName='fill-opacity'
              begin='0s'
              dur={duration}
              values='1;0;0;0;0;0;0;0'
              calcMode='linear'
              repeatCount='indefinite'
            />
          </circle>
          <circle cx='49.063' cy='27.063' r='5' fillOpacity='0' fill={color}>
            <animate
              attributeName='fill-opacity'
              begin='0s'
              dur={duration}
              values='0;1;0;0;0;0;0;0'
              calcMode='linear'
              repeatCount='indefinite'
            />
          </circle>
          <circle cx='42.601' cy='42.663' r='5' fillOpacity='0' fill={color}>
            <animate
              attributeName='fill-opacity'
              begin='0s'
              dur={duration}
              values='0;0;1;0;0;0;0;0'
              calcMode='linear'
              repeatCount='indefinite'
            />
          </circle>
          <circle cx='27' cy='49.125' r='5' fillOpacity='0' fill={color}>
            <animate
              attributeName='fill-opacity'
              begin='0s'
              dur={duration}
              values='0;0;0;1;0;0;0;0'
              calcMode='linear'
              repeatCount='indefinite'
            />
          </circle>
          <circle cx='11.399' cy='42.663' r='5' fillOpacity='0' fill={color}>
            <animate
              attributeName='fill-opacity'
              begin='0s'
              dur={duration}
              values='0;0;0;0;1;0;0;0'
              calcMode='linear'
              repeatCount='indefinite'
            />
          </circle>
          <circle cx='4.938' cy='27.063' r='5' fillOpacity='0' fill={color}>
            <animate
              attributeName='fill-opacity'
              begin='0s'
              dur={duration}
              values='0;0;0;0;0;1;0;0'
              calcMode='linear'
              repeatCount='indefinite'
            />
          </circle>
          <circle cx='11.399' cy='11.462' r='5' fillOpacity='0' fill={color}>
            <animate
              attributeName='fill-opacity'
              begin='0s'
              dur={duration}
              values='0;0;0;0;0;0;1;0'
              calcMode='linear'
              repeatCount='indefinite'
            />
          </circle>
          <circle cx='27' cy='5' r='5' fillOpacity='0' fill={color}>
            <animate
              attributeName='fill-opacity'
              begin='0s'
              dur={duration}
              values='0;0;0;0;0;0;0;1'
              calcMode='linear'
              repeatCount='indefinite'
            />
          </circle>
        </g>
      </g>
    </Icon>
  )
})
