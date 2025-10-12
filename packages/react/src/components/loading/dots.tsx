"use client"

import type { LoadingProps } from "./loading"
import { styled } from "../../core"
import { isString } from "../../utils"
import { Icon } from "../icon"
import { initialProps, superProps, withContext } from "./loading"

export interface DotsProps extends LoadingProps {}

/**
 * `Loading` is a component displayed during waiting times, such as when data is being loaded.
 *
 * @see https://yamada-ui.com/docs/components/feedback/loading
 */
export const Dots = withContext<"svg", DotsProps>(({ dur = "1s", ...rest }) => {
  dur = isString(dur) ? parseFloat(dur) : dur

  return (
    <Icon fill="currentColor" viewBox="0 0 120 30" {...rest}>
      <styled.circle
        animationDuration={`${dur}s`}
        animationIterationCount="infinite"
        animationTimingFunction="linear"
        cx="15"
        cy="15"
        r="15"
        transformBox="fill-box"
        transformOrigin="center"
        _keyframes={{
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: `scale(calc(9 / 15))` },
        }}
      />
      <styled.circle
        animationDuration={`${dur}s`}
        animationIterationCount="infinite"
        animationTimingFunction="linear"
        cx="60"
        cy="15"
        fillOpacity="1"
        r="9"
        transformBox="fill-box"
        transformOrigin="center"
        _keyframes={{
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: `scale(calc(15 / 9))` },
        }}
      />
      <styled.circle
        animationDuration={`${dur}s`}
        animationIterationCount="infinite"
        animationTimingFunction="linear"
        cx="105"
        cy="15"
        r="15"
        transformBox="fill-box"
        transformOrigin="center"
        _keyframes={{
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: `scale(calc(9 / 15))` },
        }}
      />
    </Icon>
  )
})(initialProps, superProps)
