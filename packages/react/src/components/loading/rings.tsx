"use client"

import type { LoadingProps } from "./loading"
import { styled } from "../../core"
import { isString } from "../../utils"
import { Icon } from "../icon"
import { initialProps, superProps, withContext } from "./loading"

export interface RingsProps extends LoadingProps {}

/**
 * `Loading` is a component displayed during waiting times, such as when data is being loaded.
 *
 * @see https://yamada-ui.com/docs/components/feedback/loading
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
          <styled.circle
            animationDelay="1.5s"
            animationDuration={`${dur}s`}
            animationIterationCount="infinite"
            animationTimingFunction="linear"
            cx="22px"
            cy="22px"
            r="6px"
            strokeOpacity="0"
            transformBox="fill-box"
            transformOrigin="center"
            _keyframes={{
              "0%": {
                strokeOpacity: "1",
                strokeWidth: "2",
                transform: "scale(1)",
              },
              "100%": {
                strokeOpacity: "0",
                strokeWidth: "0",
                transform: "scale(calc(22 / 6))",
              },
            }}
          />
          <styled.circle
            animationDelay="3s"
            animationDuration={`${dur}s`}
            animationIterationCount="infinite"
            animationTimingFunction="linear"
            cx="22px"
            cy="22px"
            r="6px"
            strokeOpacity="0"
            transformBox="fill-box"
            transformOrigin="center"
            _keyframes={{
              "0%": {
                strokeOpacity: "1",
                strokeWidth: "2",
                transform: "scale(1)",
              },
              "100%": {
                strokeOpacity: "0",
                strokeWidth: "0",
                transform: "scale(calc(22 / 6))",
              },
            }}
          />
          <styled.circle
            animationDuration={`${dur / 2}s`}
            animationIterationCount="infinite"
            animationTimingFunction="linear"
            cx="22px"
            cy="22px"
            r="8px"
            transformBox="fill-box"
            transformOrigin="center"
            _keyframes={{
              "0%, 100%": { transform: "scale(calc(6 / 8))" },
              "16.7%": { transform: "scale(calc(1 / 8))" },
              "33.3%": { transform: "scale(calc(2 / 8))" },
              "50%": { transform: "scale(calc(3 / 8))" },
              "66.7%": { transform: "scale(calc(4 / 8))" },
              "83.3%": { transform: "scale(calc(5 / 8))" },
            }}
          />
        </g>
      </Icon>
    )
  },
)(initialProps, superProps)
