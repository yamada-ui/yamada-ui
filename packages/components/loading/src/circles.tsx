import { forwardRef, ui } from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import { Icon } from "@yamada-ui/icon"

export type CirclesProps = Omit<IconProps, "color"> & {
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

export const Circles = forwardRef<CirclesProps, "svg">(
  ({ color, duration = "3s", ...rest }, ref) => {
    return (
      <Icon ref={ref} viewBox="0 0 58 58" stroke={color} {...rest}>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(2 1)" stroke={color} strokeWidth="1.5">
            <ui.circle
              cx="42.601"
              cy="11.462"
              r="5"
              fillOpacity="1"
              fill={color}
            >
              <animate
                attributeName="fill-opacity"
                begin="0s"
                dur={duration}
                values="1;0;0;0;0;0;0;0"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </ui.circle>
            <ui.circle
              cx="49.063"
              cy="27.063"
              r="5"
              fillOpacity="0"
              fill={color}
            >
              <animate
                attributeName="fill-opacity"
                begin="0s"
                dur={duration}
                values="0;1;0;0;0;0;0;0"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </ui.circle>
            <ui.circle
              cx="42.601"
              cy="42.663"
              r="5"
              fillOpacity="0"
              fill={color}
            >
              <animate
                attributeName="fill-opacity"
                begin="0s"
                dur={duration}
                values="0;0;1;0;0;0;0;0"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </ui.circle>
            <ui.circle cx="27" cy="49.125" r="5" fillOpacity="0" fill={color}>
              <animate
                attributeName="fill-opacity"
                begin="0s"
                dur={duration}
                values="0;0;0;1;0;0;0;0"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </ui.circle>
            <ui.circle
              cx="11.399"
              cy="42.663"
              r="5"
              fillOpacity="0"
              fill={color}
            >
              <animate
                attributeName="fill-opacity"
                begin="0s"
                dur={duration}
                values="0;0;0;0;1;0;0;0"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </ui.circle>
            <ui.circle
              cx="4.938"
              cy="27.063"
              r="5"
              fillOpacity="0"
              fill={color}
            >
              <animate
                attributeName="fill-opacity"
                begin="0s"
                dur={duration}
                values="0;0;0;0;0;1;0;0"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </ui.circle>
            <ui.circle
              cx="11.399"
              cy="11.462"
              r="5"
              fillOpacity="0"
              fill={color}
            >
              <animate
                attributeName="fill-opacity"
                begin="0s"
                dur={duration}
                values="0;0;0;0;0;0;1;0"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </ui.circle>
            <ui.circle cx="27" cy="5" r="5" fillOpacity="0" fill={color}>
              <animate
                attributeName="fill-opacity"
                begin="0s"
                dur={duration}
                values="0;0;0;0;0;0;0;1"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </ui.circle>
          </g>
        </g>
      </Icon>
    )
  },
)
