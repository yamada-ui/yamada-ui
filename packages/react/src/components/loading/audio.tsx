"use client"

import type { LoadingProps } from "./utils"
import { isString } from "../../utils"
import { Icon } from "../icon"
import { initialProps, superProps, withContext } from "./utils"

export interface AudioProps extends LoadingProps {}

/**
 * `Loading` is a component displayed during waiting times, such as when data is being loaded.
 *
 * @see https://yamada-ui.com/components/feedback/loading
 */
export const Audio = withContext<"svg", AudioProps>(
  ({ dur = "1.4s", ...rest }) => {
    dur = isString(dur) ? parseFloat(dur) : dur

    return (
      <Icon fill="currentColor" viewBox="0 0 55 80" {...rest}>
        <g transform="matrix(1 0 0 -1 0 80)">
          <rect height="20" rx="3" width="10">
            <animate
              attributeName="height"
              begin="0s"
              calcMode="linear"
              dur={`${dur * 3}s`}
              repeatCount="indefinite"
              values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20"
            />
          </rect>
          <rect height="80" rx="3" width="10" x="15">
            <animate
              attributeName="height"
              begin="0s"
              calcMode="linear"
              dur={`${dur * 1.4}s`}
              repeatCount="indefinite"
              values="80;55;33;5;75;23;73;33;12;14;60;80"
            />
          </rect>
          <rect height="50" rx="3" width="10" x="30">
            <animate
              attributeName="height"
              begin="0s"
              calcMode="linear"
              dur={`${dur}s`}
              repeatCount="indefinite"
              values="50;34;78;23;56;23;34;76;80;54;21;50"
            />
          </rect>
          <rect height="30" rx="3" width="10" x="45">
            <animate
              attributeName="height"
              begin="0s"
              calcMode="linear"
              dur={`${dur * 1.4}s`}
              repeatCount="indefinite"
              values="30;45;13;80;56;72;45;76;34;23;67;30"
            />
          </rect>
        </g>
      </Icon>
    )
  },
)(initialProps, superProps)
