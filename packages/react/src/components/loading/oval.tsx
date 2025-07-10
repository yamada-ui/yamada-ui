"use client"

import type { LoadingProps } from "./loading"
import { styled, varAttr } from "../../core"
import { Icon } from "../icon"
import { initialProps, superProps, withContext } from "./loading"

export interface OvalProps extends LoadingProps {}

/**
 * `Loading` is a component displayed during waiting times, such as when data is being loaded.
 *
 * @see https://yamada-ui.com/components/feedback/loading
 */
export const Oval = withContext<"svg", OvalProps>(
  ({ dur = "1s", secondaryColor, ...rest }) => {
    return (
      <Icon stroke="currentColor" viewBox="0 0 38 38" {...rest}>
        <g fill="none" fillRule="evenodd">
          <g strokeWidth="2" transform="translate(1 1)">
            <styled.circle
              {...(secondaryColor
                ? { stroke: "{secondary-color}" }
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
  const rest = superProps(props)

  return {
    "--secondary-color": varAttr(secondaryColor, "colors"),
    secondaryColor,
    ...rest,
  }
})
