"use client"

import type { LoadingProps } from "./loading"
import { Icon } from "../icon"
import { initialProps, superProps, withContext } from "./loading"

export interface GridProps extends LoadingProps {}

/**
 * `Loading` is a component displayed during waiting times, such as when data is being loaded.
 *
 * @see https://yamada-ui.com/components/feedback/loading
 */
export const Grid = withContext<"svg", GridProps>(({ dur = "1s", ...rest }) => {
  return (
    <Icon fill="currentColor" viewBox="0 0 105 105" {...rest}>
      <circle cx="12.5" cy="12.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="0s"
          calcMode="linear"
          dur={dur}
          repeatCount="indefinite"
          values="1;.2;1"
        />
      </circle>
      <circle cx="12.5" cy="52.5" fillOpacity=".5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="100ms"
          calcMode="linear"
          dur={dur}
          repeatCount="indefinite"
          values="1;.2;1"
        />
      </circle>
      <circle cx="52.5" cy="12.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="300ms"
          calcMode="linear"
          dur={dur}
          repeatCount="indefinite"
          values="1;.2;1"
        />
      </circle>
      <circle cx="52.5" cy="52.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="600ms"
          calcMode="linear"
          dur={dur}
          repeatCount="indefinite"
          values="1;.2;1"
        />
      </circle>
      <circle cx="92.5" cy="12.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="800ms"
          calcMode="linear"
          dur={dur}
          repeatCount="indefinite"
          values="1;.2;1"
        />
      </circle>
      <circle cx="92.5" cy="52.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="400ms"
          calcMode="linear"
          dur={dur}
          repeatCount="indefinite"
          values="1;.2;1"
        />
      </circle>
      <circle cx="12.5" cy="92.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="700ms"
          calcMode="linear"
          dur={dur}
          repeatCount="indefinite"
          values="1;.2;1"
        />
      </circle>
      <circle cx="52.5" cy="92.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="500ms"
          calcMode="linear"
          dur={dur}
          repeatCount="indefinite"
          values="1;.2;1"
        />
      </circle>
      <circle cx="92.5" cy="92.5" r="12.5">
        <animate
          attributeName="fill-opacity"
          begin="200ms"
          calcMode="linear"
          dur={dur}
          repeatCount="indefinite"
          values="1;.2;1"
        />
      </circle>
    </Icon>
  )
})(initialProps, superProps)
