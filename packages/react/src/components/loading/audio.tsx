"use client"

import type { Dict } from "../../utils"
import type { LoadingProps } from "./loading"
import { styled } from "../../core"
import { isString } from "../../utils"
import { Icon } from "../icon"
import { initialProps, superProps, withContext } from "./loading"

export interface AudioProps extends LoadingProps {}

/**
 * `Loading` is a component displayed during waiting times, such as when data is being loaded.
 *
 * @see https://yamada-ui.com/docs/components/feedback/loading
 */
export const Audio = withContext<"svg", AudioProps>(
  ({ dur = "1.4s", ...rest }) => {
    dur = isString(dur) ? parseFloat(dur) : dur

    return (
      <Icon fill="currentColor" viewBox="0 0 55 80" {...rest}>
        <g transform="matrix(1 0 0 -1 0 80)">
          {[
            {
              factor: 3,
              values: [
                20, 45, 57, 80, 64, 32, 66, 45, 64, 23, 66, 13, 64, 56, 34, 34,
                2, 23, 76, 79, 20,
              ],
              x: "0px",
            },
            {
              factor: 1.4,
              values: [80, 55, 33, 5, 75, 23, 73, 33, 12, 14, 60, 80],
              x: "15px",
            },
            {
              factor: 1,
              values: [50, 34, 78, 23, 56, 23, 34, 76, 80, 54, 21, 50],
              x: "30px",
            },
            {
              factor: 1.4,
              values: [30, 45, 13, 80, 56, 72, 45, 76, 34, 23, 67, 30],
              x: "45px",
            },
          ].map(({ factor, values, ...props }, index) => {
            const length = values.length

            const keyframes = values.reduce<Dict>((acc, value, index) => {
              const percent = `${Math.round((index / (length - 1)) * 100)}%`

              acc[percent] = { transform: `scaleY(${value / 80})` }

              return acc
            }, {})

            return (
              <styled.rect
                key={index}
                {...props}
                animationDuration={`${dur * factor}s`}
                animationIterationCount="infinite"
                animationTimingFunction="linear"
                h="80px"
                rx="3px"
                w="10px"
                _keyframes={keyframes}
              />
            )
          })}
        </g>
      </Icon>
    )
  },
)(initialProps, superProps)
