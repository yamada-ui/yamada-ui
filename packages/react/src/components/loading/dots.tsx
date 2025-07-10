"use client"

import type { LoadingProps } from "./loading"
import { Icon } from "../icon"
import { initialProps, superProps, withContext } from "./loading"

export interface DotsProps extends LoadingProps {}

/**
 * `Loading` is a component displayed during waiting times, such as when data is being loaded.
 *
 * @see https://yamada-ui.com/components/feedback/loading
 */
export const Dots = withContext<"svg", DotsProps>(({ dur = "1s", ...rest }) => {
  return (
    <Icon fill="currentColor" viewBox="0 0 120 30" {...rest}>
      <circle cx="15" cy="15" r="15">
        <animate
          attributeName="r"
          begin="0s"
          calcMode="linear"
          dur={dur}
          from="15"
          repeatCount="indefinite"
          to="15"
          values="15;9;15"
        />
        <animate
          attributeName="fill-opacity"
          begin="0s"
          calcMode="linear"
          dur={dur}
          from="1"
          repeatCount="indefinite"
          to="1"
          values="1;.5;1"
        />
      </circle>
      <circle cx="60" cy="15" fillOpacity="0.3" r="9">
        <animate
          attributeName="r"
          begin="0s"
          calcMode="linear"
          dur={dur}
          from="9"
          repeatCount="indefinite"
          to="9"
          values="9;15;9"
        />
        <animate
          attributeName="fill-opacity"
          begin="0s"
          calcMode="linear"
          dur={dur}
          from="0.5"
          repeatCount="indefinite"
          to="0.5"
          values=".5;1;.5"
        />
      </circle>
      <circle cx="105" cy="15" r="15">
        <animate
          attributeName="r"
          begin="0s"
          calcMode="linear"
          dur={dur}
          from="15"
          repeatCount="indefinite"
          to="15"
          values="15;9;15"
        />
        <animate
          attributeName="fill-opacity"
          begin="0s"
          calcMode="linear"
          dur={dur}
          from="1"
          repeatCount="indefinite"
          to="1"
          values="1;.5;1"
        />
      </circle>
    </Icon>
  )
})(initialProps, superProps)
