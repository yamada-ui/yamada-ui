"use client"

import type { LoadingProps } from "./loading"
import { styled, varAttr } from "../../core"
import { isString } from "../../utils"
import { Icon } from "../icon"
import { initialProps, superProps, withContext } from "./loading"

export interface OvalProps extends LoadingProps {}

/**
 * `Loading` is a component displayed during waiting times, such as when data is being loaded.
 *
 * @see https://yamada-ui.com/docs/components/feedback/loading
 */
export const Oval = withContext<"svg", OvalProps>(
  ({ dur = "1s", secondaryColor, ...rest }) => {
    dur = isString(dur) ? parseFloat(dur) : dur

    return (
      <Icon stroke="currentColor" viewBox="0 0 38 38" {...rest}>
        <g fill="none" fillRule="evenodd">
          <g strokeWidth="2" transform="translate(1 1)">
            <styled.circle
              {...(secondaryColor
                ? { stroke: "{secondary-color}" }
                : { strokeOpacity: ".5" })}
              cx="18px"
              cy="18px"
              r="18px"
            />
            <styled.path
              animationDuration={`${dur}s`}
              animationIterationCount="infinite"
              animationName="spin"
              animationTimingFunction="linear"
              asChild
              transformOrigin="18px 18px"
            >
              <path d="M36 18c0-9.94-8.06-18-18-18" />
            </styled.path>
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
