import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"

export interface RingsProps extends IconProps {
  /**
   * The CSS `dur` property.
   *
   * @default '3s'
   */
  duration?: IconProps["dur"]
}

export const Rings = forwardRef<RingsProps, "svg">(
  ({ color, duration = "3s", ...rest }, ref) => {
    const dur = typeof duration === "string" ? parseFloat(duration) : duration

    return (
      <Icon ref={ref} stroke={color} viewBox="0 0 45 45" {...rest}>
        <g
          fill="none"
          fillRule="evenodd"
          strokeWidth="2"
          transform="translate(1 1)"
        >
          <circle cx="22" cy="22" r="6" strokeOpacity="0">
            <animate
              attributeName="r"
              begin="1.5s"
              calcMode="linear"
              dur={`${dur}s`}
              repeatCount="indefinite"
              values="6;22"
            />
            <animate
              attributeName="stroke-opacity"
              begin="1.5s"
              calcMode="linear"
              dur={`${dur}s`}
              repeatCount="indefinite"
              values="1;0"
            />
            <animate
              attributeName="stroke-width"
              begin="1.5s"
              calcMode="linear"
              dur={`${dur}s`}
              repeatCount="indefinite"
              values="2;0"
            />
          </circle>
          <circle cx="22" cy="22" r="6" strokeOpacity="0">
            <animate
              attributeName="r"
              begin="3s"
              calcMode="linear"
              dur={`${dur}s`}
              repeatCount="indefinite"
              values="6;22"
            />
            <animate
              attributeName="stroke-opacity"
              begin="3s"
              calcMode="linear"
              dur={`${dur}s`}
              repeatCount="indefinite"
              values="1;0"
            />
            <animate
              attributeName="stroke-width"
              begin="3s"
              calcMode="linear"
              dur={`${dur}s`}
              repeatCount="indefinite"
              values="2;0"
            />
          </circle>
          <circle cx="22" cy="22" r="8">
            <animate
              attributeName="r"
              begin="0s"
              calcMode="linear"
              dur={`${dur / 2}s`}
              repeatCount="indefinite"
              values="6;1;2;3;4;5;6"
            />
          </circle>
        </g>
      </Icon>
    )
  },
)
