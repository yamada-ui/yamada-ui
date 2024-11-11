import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"

export interface OvalProps extends IconProps {
  /**
   * The CSS `dur` property.
   *
   * @default '1s'
   */
  duration?: IconProps["dur"]
  /**
   * The CSS `stroke` property.
   */
  secondaryColor?: string
}

export const Oval = forwardRef<OvalProps, "svg">(
  ({ color, duration = "1s", secondaryColor, ...rest }, ref) => {
    return (
      <Icon ref={ref} stroke={color} viewBox="0 0 38 38" {...rest}>
        <g fill="none" fillRule="evenodd">
          <g strokeWidth="2" transform="translate(1 1)">
            <circle
              {...(secondaryColor
                ? { stroke: secondaryColor }
                : { strokeOpacity: ".5" })}
              cx="18"
              cy="18"
              r="18"
            />
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                type="rotate"
                attributeName="transform"
                dur={duration}
                from="0 18 18"
                repeatCount="indefinite"
                to="360 18 18"
              />
            </path>
          </g>
        </g>
      </Icon>
    )
  },
)

Oval.displayName = "Oval"
Oval.__ui__ = "Oval"
