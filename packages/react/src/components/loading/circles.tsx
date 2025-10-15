"use client"

import type { LoadingProps } from "./loading"
import { styled } from "../../core"
import { isString } from "../../utils"
import { Icon } from "../icon"
import { initialProps, superProps, withContext } from "./loading"

export interface CirclesProps extends LoadingProps {}

/**
 * `Loading` is a component displayed during waiting times, such as when data is being loaded.
 *
 * @see https://yamada-ui.com/docs/components/feedback/loading
 */
export const Circles = withContext<"svg", CirclesProps>(
  ({ dur = "3s", ...rest }) => {
    dur = isString(dur) ? parseFloat(dur) : dur

    return (
      <Icon stroke="currentColor" viewBox="0 0 58 58" {...rest}>
        <g fill="none" fillRule="evenodd">
          <g stroke="currentColor" strokeWidth="1.5" transform="translate(2 1)">
            {[
              { cx: "42.601px", cy: "11.462px" },
              { animationDelay: "0.375s", cx: "49.063px", cy: "27.063px" },
              { animationDelay: "0.75s", cx: "42.601px", cy: "42.663px" },
              { animationDelay: "1.125s", cx: "27px", cy: "49.125px" },
              { animationDelay: "1.5s", cx: "11.399px", cy: "42.663px" },
              { animationDelay: "1.875s", cx: "4.938px", cy: "27.063px" },
              { animationDelay: "2.25s", cx: "11.399px", cy: "11.462px" },
              { animationDelay: "2.625s", cx: "27px", cy: "5px" },
            ].map((props, index) => (
              <styled.circle
                key={index}
                {...props}
                animationDuration={`${dur}s`}
                animationIterationCount="infinite"
                animationTimingFunction="linear"
                fill="currentColor"
                fillOpacity={!index ? "1" : "0"}
                r="5px"
                _keyframes={{
                  "0%, 25%, 100%": { fillOpacity: 0 },
                  "12.5%": { fillOpacity: 1 },
                }}
              />
            ))}
          </g>
        </g>
      </Icon>
    )
  },
)(initialProps, superProps)
