"use client"

import type { LoadingProps } from "./loading"
import { styled } from "../../core"
import { isString } from "../../utils"
import { Icon } from "../icon"
import { initialProps, superProps, withContext } from "./loading"

export interface PuffProps extends LoadingProps {}

/**
 * `Loading` is a component displayed during waiting times, such as when data is being loaded.
 *
 * @see https://yamada-ui.com/docs/components/feedback/loading
 */
export const Puff = withContext<"svg", PuffProps>(
  ({ dur = "1.8s", suppressHydrationWarning, ...rest }) => {
    dur = isString(dur) ? parseFloat(dur) : dur

    return (
      <Icon
        stroke="currentColor"
        suppressHydrationWarning={suppressHydrationWarning}
        viewBox="0 0 44 44"
        {...rest}
      >
        <g fill="none" fillRule="evenodd" strokeWidth="2">
          <styled.circle
            animationDuration={`${dur}s`}
            animationIterationCount="infinite"
            animationTimingFunction="cubic-bezier(0.3, 0.61, 0.355, 1)"
            cx="22px"
            cy="22px"
            r="1px"
            suppressHydrationWarning={suppressHydrationWarning}
            transformBox="fill-box"
            transformOrigin="center"
            vectorEffect="non-scaling-stroke"
            _keyframes={{
              "0%": { strokeOpacity: 1, transform: "scale(1)" },
              "100%": { strokeOpacity: 0, transform: "scale(20)" },
            }}
          />
          <styled.circle
            animationDelay="-0.9s"
            animationDuration={`${dur}s`}
            animationIterationCount="infinite"
            animationTimingFunction="cubic-bezier(0.3, 0.61, 0.355, 1)"
            cx="22px"
            cy="22px"
            r="1px"
            suppressHydrationWarning={suppressHydrationWarning}
            transformBox="fill-box"
            transformOrigin="center"
            vectorEffect="non-scaling-stroke"
            _keyframes={{
              "0%": { strokeOpacity: 1, transform: "scale(1)" },
              "100%": { strokeOpacity: 0, transform: "scale(20)" },
            }}
          />
        </g>
      </Icon>
    )
  },
)(initialProps, superProps)
