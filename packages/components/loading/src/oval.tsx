import { forwardRef } from "@yamada-ui/core"
import { Icon, IconProps } from "@yamada-ui/icon"

export type OvalProps = IconProps & {
  /**
   * The CSS `stroke` property.
   */
  secondaryColor: string
  /**
   * The CSS `dur` property.
   *
   * @default '1s'
   */
  duration?: IconProps["dur"]
}

export const Oval = forwardRef<OvalProps, "svg">(
  ({ color, secondaryColor, duration = "1s", ...rest }, ref) => {
    return (
      <Icon ref={ref} viewBox="0 0 38 38" stroke={color} {...rest}>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)" strokeWidth="2">
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
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur={duration}
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
      </Icon>
    )
  },
)
