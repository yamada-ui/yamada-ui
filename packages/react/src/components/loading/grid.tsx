import type { FC } from "../../core"
import type { IconProps } from "../icon"
import { Icon } from "../icon"

export interface GridProps extends IconProps {
  /**
   * The CSS `dur` property.
   *
   * @default '1s'
   */
  duration?: IconProps["dur"]
}

export const Grid: FC<GridProps> = ({ color, duration = "1s", ...rest }) => {
  return (
    <Icon fill={color} viewBox="0 0 105 105" {...rest}>
      <circle cx="12.5" cy="12.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="0s"
          calcMode="linear"
          dur={duration}
          repeatCount="indefinite"
          values="1;.2;1"
        />
      </circle>
      <circle cx="12.5" cy="52.5" fillOpacity=".5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="100ms"
          calcMode="linear"
          dur={duration}
          repeatCount="indefinite"
          values="1;.2;1"
        />
      </circle>
      <circle cx="52.5" cy="12.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="300ms"
          calcMode="linear"
          dur={duration}
          repeatCount="indefinite"
          values="1;.2;1"
        />
      </circle>
      <circle cx="52.5" cy="52.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="600ms"
          calcMode="linear"
          dur={duration}
          repeatCount="indefinite"
          values="1;.2;1"
        />
      </circle>
      <circle cx="92.5" cy="12.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="800ms"
          calcMode="linear"
          dur={duration}
          repeatCount="indefinite"
          values="1;.2;1"
        />
      </circle>
      <circle cx="92.5" cy="52.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="400ms"
          calcMode="linear"
          dur={duration}
          repeatCount="indefinite"
          values="1;.2;1"
        />
      </circle>
      <circle cx="12.5" cy="92.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="700ms"
          calcMode="linear"
          dur={duration}
          repeatCount="indefinite"
          values="1;.2;1"
        />
      </circle>
      <circle cx="52.5" cy="92.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="500ms"
          calcMode="linear"
          dur={duration}
          repeatCount="indefinite"
          values="1;.2;1"
        />
      </circle>
      <circle cx="92.5" cy="92.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="200ms"
          calcMode="linear"
          dur={duration}
          repeatCount="indefinite"
          values="1;.2;1"
        />
      </circle>
    </Icon>
  )
}

Grid.__ui__ = "Grid"
