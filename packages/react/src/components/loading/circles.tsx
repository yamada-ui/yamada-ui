import type { LoadingProps } from "./utils"
import { styled } from "../../core"
import { Icon } from "../icon"
import { initialProps, superProps, withContext } from "./utils"

export interface CirclesProps extends LoadingProps {}

/**
 * `Loading` is a component displayed during waiting times, such as when data is being loaded.
 *
 * @see https://yamada-ui.com/components/feedback/loading
 */
export const Circles = withContext<"svg", CirclesProps>(
  ({ dur = "3s", ...rest }) => {
    return (
      <Icon stroke="currentColor" viewBox="0 0 58 58" {...rest}>
        <g fill="none" fillRule="evenodd">
          <g stroke="currentColor" strokeWidth="1.5" transform="translate(2 1)">
            <styled.circle
              cx="42.601"
              cy="11.462"
              fill="currentColor"
              fillOpacity="1"
              r="5"
            >
              <animate
                attributeName="fill-opacity"
                begin="0s"
                calcMode="linear"
                dur={dur}
                repeatCount="indefinite"
                values="1;0;0;0;0;0;0;0"
              />
            </styled.circle>
            <styled.circle
              cx="49.063"
              cy="27.063"
              fill="currentColor"
              fillOpacity="0"
              r="5"
            >
              <animate
                attributeName="fill-opacity"
                begin="0s"
                calcMode="linear"
                dur={dur}
                repeatCount="indefinite"
                values="0;1;0;0;0;0;0;0"
              />
            </styled.circle>
            <styled.circle
              cx="42.601"
              cy="42.663"
              fill="currentColor"
              fillOpacity="0"
              r="5"
            >
              <animate
                attributeName="fill-opacity"
                begin="0s"
                calcMode="linear"
                dur={dur}
                repeatCount="indefinite"
                values="0;0;1;0;0;0;0;0"
              />
            </styled.circle>
            <styled.circle
              cx="27"
              cy="49.125"
              fill="currentColor"
              fillOpacity="0"
              r="5"
            >
              <animate
                attributeName="fill-opacity"
                begin="0s"
                calcMode="linear"
                dur={dur}
                repeatCount="indefinite"
                values="0;0;0;1;0;0;0;0"
              />
            </styled.circle>
            <styled.circle
              cx="11.399"
              cy="42.663"
              fill="currentColor"
              fillOpacity="0"
              r="5"
            >
              <animate
                attributeName="fill-opacity"
                begin="0s"
                calcMode="linear"
                dur={dur}
                repeatCount="indefinite"
                values="0;0;0;0;1;0;0;0"
              />
            </styled.circle>
            <styled.circle
              cx="4.938"
              cy="27.063"
              fill="currentColor"
              fillOpacity="0"
              r="5"
            >
              <animate
                attributeName="fill-opacity"
                begin="0s"
                calcMode="linear"
                dur={dur}
                repeatCount="indefinite"
                values="0;0;0;0;0;1;0;0"
              />
            </styled.circle>
            <styled.circle
              cx="11.399"
              cy="11.462"
              fill="currentColor"
              fillOpacity="0"
              r="5"
            >
              <animate
                attributeName="fill-opacity"
                begin="0s"
                calcMode="linear"
                dur={dur}
                repeatCount="indefinite"
                values="0;0;0;0;0;0;1;0"
              />
            </styled.circle>
            <styled.circle
              cx="27"
              cy="5"
              fill="currentColor"
              fillOpacity="0"
              r="5"
            >
              <animate
                attributeName="fill-opacity"
                begin="0s"
                calcMode="linear"
                dur={dur}
                repeatCount="indefinite"
                values="0;0;0;0;0;0;0;1"
              />
            </styled.circle>
          </g>
        </g>
      </Icon>
    )
  },
)(initialProps, superProps)
