import type { LoadingProps } from "./utils"
import { styled } from "../../core"
import { Icon } from "../icon"
import { initialProps, superProps, withContext } from "./utils"

export interface OvalProps extends LoadingProps {}

/**
 * `Loading` is a component displayed during waiting times, such as when data is being loaded.
 *
 * @see Docs https://yamada-ui.com/components/feedback/loading
 */
export const Oval = withContext<"svg", OvalProps>(
  ({ dur = "1s", secondaryColor, ...rest }) => {
    return (
      <Icon stroke="currentColor" viewBox="0 0 38 38" {...rest}>
        <g fill="none" fillRule="evenodd">
          <g strokeWidth="2" transform="translate(1 1)">
            <styled.circle
              {...(secondaryColor
                ? { stroke: "{secondaryColor}" }
                : { strokeOpacity: ".5" })}
              cx="18"
              cy="18"
              r="18"
            />
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                type="rotate"
                attributeName="transform"
                dur={dur}
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
)(initialProps, ({ secondaryColor, ...props }) => {
  const { vars = [], ...rest } = superProps(props)

  if (secondaryColor)
    vars.push({
      name: "secondaryColor",
      token: "colors",
      value: secondaryColor,
    })

  return { vars, ...rest }
})
