"use client"

import type { LoadingProps } from "./loading"
import { isString } from "../../utils"
import { Icon } from "../icon"
import { initialProps, superProps, withContext } from "./loading"

export interface RingsProps extends LoadingProps {}

/**
 * `Loading` is a component displayed during waiting times, such as when data is being loaded.
 *
 * @see https://yamada-ui.com/components/feedback/loading
 */
export const Rings = withContext<"svg", RingsProps>(
  ({ dur = "3s", ...rest }) => {
    dur = isString(dur) ? parseFloat(dur) : dur

    return (
      <Icon stroke="currentColor" viewBox="0 0 45 45" {...rest}>
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
)(initialProps, superProps)
