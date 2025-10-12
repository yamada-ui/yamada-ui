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
              { cx: "42.601", cy: "11.462" },
              { animationDelay: "0.375s", cx: "49.063", cy: "27.063" },
              { animationDelay: "0.75s", cx: "42.601", cy: "42.663" },
              { animationDelay: "1.125s", cx: "27", cy: "49.125" },
              { animationDelay: "1.5s", cx: "11.399", cy: "42.663" },
              { animationDelay: "1.875s", cx: "4.938", cy: "27.063" },
              { animationDelay: "2.25s", cx: "11.399", cy: "11.462" },
              { animationDelay: "2.625s", cx: "27", cy: "5" },
            ].map((props, index) => (
              <styled.circle
                key={index}
                {...props}
                animationDuration={`${dur}s`}
                animationIterationCount="infinite"
                animationTimingFunction="linear"
                fill="currentColor"
                fillOpacity={!index ? "1" : "0"}
                r="5"
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
