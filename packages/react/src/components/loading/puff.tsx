"use client"

import type { LoadingProps } from "./utils"
import { Icon } from "../icon"
import { initialProps, superProps, withContext } from "./utils"

export interface PuffProps extends LoadingProps {}

/**
 * `Loading` is a component displayed during waiting times, such as when data is being loaded.
 *
 * @see https://yamada-ui.com/components/feedback/loading
 */
export const Puff = withContext<"svg", PuffProps>(
  ({ dur = "1.8s", ...rest }) => {
    return (
      <Icon stroke="currentColor" viewBox="0 0 44 44" {...rest}>
        <g fill="none" fillRule="evenodd" strokeWidth="2">
          <circle cx="22" cy="22" r="1">
            <animate
              attributeName="r"
              begin="0s"
              calcMode="spline"
              dur={dur}
              keySplines="0.165, 0.84, 0.44, 1"
              keyTimes="0; 1"
              repeatCount="indefinite"
              values="1; 20"
            />
            <animate
              attributeName="stroke-opacity"
              begin="0s"
              calcMode="spline"
              dur={dur}
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
              dur={dur}
              keySplines="0.165, 0.84, 0.44, 1"
              keyTimes="0; 1"
              repeatCount="indefinite"
              values="1; 20"
            />
            <animate
              attributeName="stroke-opacity"
              begin="-0.9s"
              calcMode="spline"
              dur={dur}
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
)(initialProps, superProps)
