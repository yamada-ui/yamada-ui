"use client"

import type { LoadingProps } from "./loading"
import { styled } from "../../core"
import { isString } from "../../utils"
import { Icon } from "../icon"
import { initialProps, superProps, withContext } from "./loading"

export interface GridProps extends LoadingProps {}

/**
 * `Loading` is a component displayed during waiting times, such as when data is being loaded.
 *
 * @see https://yamada-ui.com/docs/components/feedback/loading
 */
export const Grid = withContext<"svg", GridProps>(({ dur = "1s", ...rest }) => {
  dur = isString(dur) ? parseFloat(dur) : dur

  return (
    <Icon fill="currentColor" viewBox="0 0 105 105" {...rest}>
      {[
        { cx: "12.5px", cy: "12.5px" },
        { animationDelay: "0.1s", cx: "12.5px", cy: "52.5px" },
        { animationDelay: "0.3s", cx: "52.5px", cy: "12.5px" },
        { animationDelay: "0.6s", cx: "52.5px", cy: "52.5px" },
        { animationDelay: "0.8s", cx: "92.5px", cy: "12.5px" },
        { animationDelay: "0.4s", cx: "92.5px", cy: "52.5px" },
        { animationDelay: "0.7s", cx: "12.5px", cy: "92.5px" },
        { animationDelay: "0.5s", cx: "52.5px", cy: "92.5px" },
        { animationDelay: "0.2s", cx: "92.5px", cy: "92.5px" },
      ].map((props, index) => (
        <styled.circle
          key={index}
          {...props}
          animationDuration={`${dur}s`}
          animationIterationCount="infinite"
          animationTimingFunction="linear"
          r="12.5px"
          _keyframes={{
            "0%, 100%": { fillOpacity: "1" },
            "50%": { fillOpacity: "0.2" },
          }}
        />
      ))}
    </Icon>
  )
})(initialProps, superProps)
