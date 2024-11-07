import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"

export interface PuffProps extends IconProps {
  /**
   * The CSS `dur` property.
   *
   * @default '1.8s'
   */
  duration?: IconProps["dur"]
}

export const Puff = forwardRef<PuffProps, "svg">(
  ({ color, duration = "1.8s", ...rest }, ref) => {
    return (
      <Icon ref={ref} stroke={color} viewBox="0 0 44 44" {...rest}>
        <g fill="none" fillRule="evenodd" strokeWidth="2">
          <circle cx="22" cy="22" r="1">
            <animate
              attributeName="r"
              begin="0s"
              calcMode="spline"
              dur={duration}
              keySplines="0.165, 0.84, 0.44, 1"
              keyTimes="0; 1"
              repeatCount="indefinite"
              values="1; 20"
            />
            <animate
              attributeName="stroke-opacity"
              begin="0s"
              calcMode="spline"
              dur={duration}
              keySplines="0.3, 0.61, 0.355, 1"
              keyTimes="0; 1"
              repeatCount="indefinite"
              values="1; 0"
            />
          </circle>
          <circle cx="22" cy="22" r="1">
            <animate
              attributeName="r"
              begin="-0.9s"
              calcMode="spline"
              dur={duration}
              keySplines="0.165, 0.84, 0.44, 1"
              keyTimes="0; 1"
              repeatCount="indefinite"
              values="1; 20"
            />
            <animate
              attributeName="stroke-opacity"
              begin="-0.9s"
              calcMode="spline"
              dur={duration}
              keySplines="0.3, 0.61, 0.355, 1"
              keyTimes="0; 1"
              repeatCount="indefinite"
              values="1; 0"
            />
          </circle>
        </g>
      </Icon>
    )
  },
)

Puff.displayName = "Puff"
Puff.__ui__ = "Puff"
