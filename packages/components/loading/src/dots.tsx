import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"

export interface DotsProps extends IconProps {
  /**
   * The CSS `dur` property.
   *
   * @default '1s'
   */
  duration?: IconProps["dur"]
}

export const Dots = forwardRef<DotsProps, "svg">(
  ({ color, duration = "1s", ...rest }, ref) => {
    return (
      <Icon ref={ref} fill={color} viewBox="0 0 120 30" {...rest}>
        <circle cx="15" cy="15" r="15">
          <animate
            attributeName="r"
            begin="0s"
            calcMode="linear"
            dur={duration}
            from="15"
            repeatCount="indefinite"
            to="15"
            values="15;9;15"
          />
          <animate
            attributeName="fill-opacity"
            begin="0s"
            calcMode="linear"
            dur={duration}
            from="1"
            repeatCount="indefinite"
            to="1"
            values="1;.5;1"
          />
        </circle>
        <circle cx="60" cy="15" fillOpacity="0.3" r="9">
          <animate
            attributeName="r"
            begin="0s"
            calcMode="linear"
            dur={duration}
            from="9"
            repeatCount="indefinite"
            to="9"
            values="9;15;9"
          />
          <animate
            attributeName="fill-opacity"
            begin="0s"
            calcMode="linear"
            dur={duration}
            from="0.5"
            repeatCount="indefinite"
            to="0.5"
            values=".5;1;.5"
          />
        </circle>
        <circle cx="105" cy="15" r="15">
          <animate
            attributeName="r"
            begin="0s"
            calcMode="linear"
            dur={duration}
            from="15"
            repeatCount="indefinite"
            to="15"
            values="15;9;15"
          />
          <animate
            attributeName="fill-opacity"
            begin="0s"
            calcMode="linear"
            dur={duration}
            from="1"
            repeatCount="indefinite"
            to="1"
            values="1;.5;1"
          />
        </circle>
      </Icon>
    )
  },
)
