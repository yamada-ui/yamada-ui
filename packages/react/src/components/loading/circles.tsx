import type { FC } from "../../core"
import type { IconProps } from "../icon"
import { ui } from "../../core"
import { Icon } from "../icon"

export interface CirclesProps extends Omit<IconProps, "color"> {
  /**
   * The CSS `stroke` property.
   */
  color?: string
  /**
   * The CSS `dur` property.
   *
   * @default '3s'
   */
  duration?: IconProps["dur"]
}

export const Circles: FC<CirclesProps> = ({
  color,
  duration = "3s",
  ...rest
}) => {
  return (
    <Icon stroke={color} viewBox="0 0 58 58" {...rest}>
      <g fill="none" fillRule="evenodd">
        <g stroke={color} strokeWidth="1.5" transform="translate(2 1)">
          <ui.circle cx="42.601" cy="11.462" fill={color} fillOpacity="1" r="5">
            <animate
              attributeName="fill-opacity"
              begin="0s"
              calcMode="linear"
              dur={duration}
              repeatCount="indefinite"
              values="1;0;0;0;0;0;0;0"
            />
          </ui.circle>
          <ui.circle cx="49.063" cy="27.063" fill={color} fillOpacity="0" r="5">
            <animate
              attributeName="fill-opacity"
              begin="0s"
              calcMode="linear"
              dur={duration}
              repeatCount="indefinite"
              values="0;1;0;0;0;0;0;0"
            />
          </ui.circle>
          <ui.circle cx="42.601" cy="42.663" fill={color} fillOpacity="0" r="5">
            <animate
              attributeName="fill-opacity"
              begin="0s"
              calcMode="linear"
              dur={duration}
              repeatCount="indefinite"
              values="0;0;1;0;0;0;0;0"
            />
          </ui.circle>
          <ui.circle cx="27" cy="49.125" fill={color} fillOpacity="0" r="5">
            <animate
              attributeName="fill-opacity"
              begin="0s"
              calcMode="linear"
              dur={duration}
              repeatCount="indefinite"
              values="0;0;0;1;0;0;0;0"
            />
          </ui.circle>
          <ui.circle cx="11.399" cy="42.663" fill={color} fillOpacity="0" r="5">
            <animate
              attributeName="fill-opacity"
              begin="0s"
              calcMode="linear"
              dur={duration}
              repeatCount="indefinite"
              values="0;0;0;0;1;0;0;0"
            />
          </ui.circle>
          <ui.circle cx="4.938" cy="27.063" fill={color} fillOpacity="0" r="5">
            <animate
              attributeName="fill-opacity"
              begin="0s"
              calcMode="linear"
              dur={duration}
              repeatCount="indefinite"
              values="0;0;0;0;0;1;0;0"
            />
          </ui.circle>
          <ui.circle cx="11.399" cy="11.462" fill={color} fillOpacity="0" r="5">
            <animate
              attributeName="fill-opacity"
              begin="0s"
              calcMode="linear"
              dur={duration}
              repeatCount="indefinite"
              values="0;0;0;0;0;0;1;0"
            />
          </ui.circle>
          <ui.circle cx="27" cy="5" fill={color} fillOpacity="0" r="5">
            <animate
              attributeName="fill-opacity"
              begin="0s"
              calcMode="linear"
              dur={duration}
              repeatCount="indefinite"
              values="0;0;0;0;0;0;0;1"
            />
          </ui.circle>
        </g>
      </g>
    </Icon>
  )
}

Circles.__ui__ = "Circles"
