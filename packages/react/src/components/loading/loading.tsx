import type {
  CSSProps,
  SuperWithoutThemeProps,
  ThemeProps,
  WithoutThemeProps,
} from "../../core"
import type { IconProps } from "../icon"
import type { LoadingStyle } from "./loading.style"
import { createComponent, ui } from "../../core"
import { isString } from "../../utils"
import { Icon } from "../icon"
import { loadingStyle } from "./loading.style"

export type LoadingScheme =
  | "audio"
  | "circles"
  | "dots"
  | "grid"
  | "oval"
  | "puff"
  | "rings"

const superProps: SuperWithoutThemeProps<LoadingProps, LoadingStyle> = ({
  css,
  duration,
  dur = duration,
  vars = [],
  ...rest
}) => ({
  css,
  dur,
  vars,
  ...rest,
})

export interface LoadingProps
  extends WithoutThemeProps<IconProps>,
    ThemeProps<LoadingStyle> {
  /**
   * The CSS `dur` property.
   */
  duration?: IconProps["dur"]
  /**
   * The CSS `color` property.
   */
  secondaryColor?: CSSProps["color"]
}

export const {
  component,
  PropsContext: LoadingPropsContext,
  usePropsContext: useLoadingPropsContext,
  withContext,
} = createComponent<LoadingProps, LoadingStyle>("loading", loadingStyle)

/**
 * `Loading` is a component displayed during waiting times, such as when data is being loaded.
 *
 * @see Docs https://yamada-ui.com/components/feedback/loading
 */

export interface LoadingGridProps extends LoadingProps {}

export const LoadingGrid = withContext<"svg", LoadingGridProps>(
  ({ dur = "1s", ...rest }) => {
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
  },
)(undefined, superProps)

export interface LoadingAudioProps extends LoadingProps {}

export const LoadingAudio = withContext<"svg", LoadingAudioProps>(
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
)(undefined, superProps)

export interface LoadingDotsProps extends LoadingProps {}

export const LoadingDots = withContext<"svg", LoadingDotsProps>(
  ({ dur = "1s", ...rest }) => {
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
  },
)(undefined, superProps)

export interface LoadingPuffProps extends LoadingProps {}

export const LoadingPuff = withContext<"svg", LoadingPuffProps>(
  ({ dur = "1.8s", ...rest }) => {
    return (
      <Icon stroke="currentColor" viewBox="0 0 44 44" {...rest}>
        <g fill="none" fillRule="evenodd" strokeWidth="2">
          <circle cx="22" cy="22" r="1">
            <animate
              attributeName="r"
              begin="0s"
              calcMode="spline"
              dur={dur}
              keySplines="0.165, 0.84, 0.44, 1"
              keyTimes="0; 1"
              repeatCount="indefinite"
              values="1; 20"
            />
            <animate
              attributeName="stroke-opacity"
              begin="0s"
              calcMode="spline"
              dur={dur}
              keySplines="0.3, 0.61, 0.355, 1"
              keyTimes="0; 1"
              repeatCount="indefinite"
              values="1; 0"
            />
          </circle>
          <circle cx="22" cy="22" r="1">
            <animate
              attributeName="r"
              begin="-0.9s"
              calcMode="spline"
              dur={dur}
              keySplines="0.165, 0.84, 0.44, 1"
              keyTimes="0; 1"
              repeatCount="indefinite"
              values="1; 20"
            />
            <animate
              attributeName="stroke-opacity"
              begin="-0.9s"
              calcMode="spline"
              dur={dur}
              keySplines="0.3, 0.61, 0.355, 1"
              keyTimes="0; 1"
              repeatCount="indefinite"
              values="1; 0"
            />
          </circle>
        </g>
      </Icon>
    )
  },
)(undefined, superProps)

export interface LoadingRingsProps extends LoadingProps {}

export const LoadingRings = withContext<"svg", LoadingRingsProps>(
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
          <circle cx="22" cy="22" r="6" strokeOpacity="0">
            <animate
              attributeName="r"
              begin="1.5s"
              calcMode="linear"
              dur={`${dur}s`}
              repeatCount="indefinite"
              values="6;22"
            />
            <animate
              attributeName="stroke-opacity"
              begin="1.5s"
              calcMode="linear"
              dur={`${dur}s`}
              repeatCount="indefinite"
              values="1;0"
            />
            <animate
              attributeName="stroke-width"
              begin="1.5s"
              calcMode="linear"
              dur={`${dur}s`}
              repeatCount="indefinite"
              values="2;0"
            />
          </circle>
          <circle cx="22" cy="22" r="6" strokeOpacity="0">
            <animate
              attributeName="r"
              begin="3s"
              calcMode="linear"
              dur={`${dur}s`}
              repeatCount="indefinite"
              values="6;22"
            />
            <animate
              attributeName="stroke-opacity"
              begin="3s"
              calcMode="linear"
              dur={`${dur}s`}
              repeatCount="indefinite"
              values="1;0"
            />
            <animate
              attributeName="stroke-width"
              begin="3s"
              calcMode="linear"
              dur={`${dur}s`}
              repeatCount="indefinite"
              values="2;0"
            />
          </circle>
          <circle cx="22" cy="22" r="8">
            <animate
              attributeName="r"
              begin="0s"
              calcMode="linear"
              dur={`${dur / 2}s`}
              repeatCount="indefinite"
              values="6;1;2;3;4;5;6"
            />
          </circle>
        </g>
      </Icon>
    )
  },
)(undefined, superProps)

export interface LoadingCirclesProps extends LoadingProps {}

export const LoadingCircles = withContext<"svg", LoadingCirclesProps>(
  ({ dur = "3s", ...rest }) => {
    return (
      <Icon stroke="currentColor" viewBox="0 0 58 58" {...rest}>
        <g fill="none" fillRule="evenodd">
          <g stroke="currentColor" strokeWidth="1.5" transform="translate(2 1)">
            <ui.circle
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
            </ui.circle>
            <ui.circle
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
            </ui.circle>
            <ui.circle
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
            </ui.circle>
            <ui.circle
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
            </ui.circle>
            <ui.circle
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
            </ui.circle>
            <ui.circle
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
            </ui.circle>
            <ui.circle
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
            </ui.circle>
            <ui.circle cx="27" cy="5" fill="currentColor" fillOpacity="0" r="5">
              <animate
                attributeName="fill-opacity"
                begin="0s"
                calcMode="linear"
                dur={dur}
                repeatCount="indefinite"
                values="0;0;0;0;0;0;0;1"
              />
            </ui.circle>
          </g>
        </g>
      </Icon>
    )
  },
)(undefined, superProps)

export interface LoadingOvalProps extends LoadingProps {}

export const LoadingOval = withContext<"svg", LoadingOvalProps>(
  ({ dur = "1s", secondaryColor, ...rest }) => {
    return (
      <Icon stroke="currentColor" viewBox="0 0 38 38" {...rest}>
        <g fill="none" fillRule="evenodd">
          <g strokeWidth="2" transform="translate(1 1)">
            <ui.circle
              {...(secondaryColor
                ? { stroke: "$secondaryColor" }
                : { strokeOpacity: ".5" })}
              cx="18"
              cy="18"
              r="18"
            />
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                type="rotate"
                attributeName="transform"
                dur={dur}
                from="0 18 18"
                repeatCount="indefinite"
                to="360 18 18"
              />
            </path>
          </g>
        </g>
      </Icon>
    )
  },
)(undefined, ({ secondaryColor, ...props }) => {
  const { vars = [], ...rest } = superProps(props)

  if (secondaryColor)
    vars.push({
      name: "secondaryColor",
      token: "colors",
      value: secondaryColor,
    })

  return { vars, ...rest }
})
