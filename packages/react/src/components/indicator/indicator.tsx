import type { ReactNode } from "react"
import type {
  CSSAnimationObject,
  HTMLStyledProps,
  PropGetter,
  StyleValue,
  ThemeProps,
} from "../../core"
import type { IndicatorStyle } from "./indicator.style"
import { useMemo } from "react"
import { createSlotComponent, mergeVars, styled } from "../../core"
import { useAnimation } from "../../hooks/use-animation"
import { useValue } from "../../hooks/use-value"
import { dataAttr } from "../../utils"
import { indicatorStyle } from "./indicator.style"

export interface IndicatorProps
  extends Omit<HTMLStyledProps, "offset">,
    ThemeProps<IndicatorStyle> {
  /**
   * If `true`, the indicator will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * The indicator label to use.
   */
  label?: ReactNode
  /**
   * Changes position offset, usually used when element has border-radius.
   *
   * @default 0
   */
  offset?: StyleValue<number>
  /**
   * If `label` is of type number, the maximum number displayed.
   *
   * @default 99
   */
  overflowCount?: number
  /**
   * If `true`, make an element scale and fade like a radar ping or ripple of water.
   *
   * @default false
   */
  ping?: boolean
  /**
   * It is used for the color of the ping animation.
   *
   * @default "var(--ui-ping)"
   */
  pingColor?: HTMLStyledProps["backgroundColor"]
  /**
   * It is used for the count of the ping animation.
   *
   * @default "infinite"
   */
  pingCount?: CSSAnimationObject["iterationCount"]
  /**
   * It is used for the duration of the ping animation.
   *
   * @default "1.4s"
   */
  pingDuration?: CSSAnimationObject["direction"]
  /**
   * It is used for the scale of the ping animation.
   *u
   * @default 1.8
   */
  pingScale?: number
  /**
   * If `true`, display 0.
   *
   * @default true
   */
  showZero?: boolean
  /**
   * Props for indicator wrapper element.
   */
  containerProps?: Omit<HTMLStyledProps, "children">
}

export const {
  PropsContext: IndicatorPropsContext,
  useComponentContext: useIndicatorContext,
  usePropsContext: useIndicatorPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<IndicatorProps, IndicatorStyle>(
  "indicator",
  indicatorStyle,
)

/**
 * `Indicator` is a component that displays at the corner of elements such as avatars.
 *
 * @see Docs https://yamada-ui.com/components/indicator
 */
export const Indicator = withProvider<"div", IndicatorProps>(
  ({
    className,
    css: rootCssProps,
    children,
    disabled,
    label,
    offset = 0,
    overflowCount = 99,
    ping,
    pingColor = "{ping}",
    pingCount = "infinite",
    pingDuration = "1.4s",
    pingScale = 1.8,
    showZero = true,
    vars,
    containerProps,
    ...rest
  }) => {
    const animation = useAnimation({
      duration: pingDuration,
      fillMode: "forwards",
      iterationCount: pingCount,
      keyframes: {
        "75%": {
          opacity: 0,
          transform: `scale(${pingScale})`,
        },
        "100%": {
          opacity: 0,
          transform: `scale(${pingScale})`,
        },
      },
      timingFunction: "cubic-bezier(0, 0, 0.2, 1)",
    })
    const numeric = typeof label === "number"
    const trulyDisabled =
      disabled ?? (numeric && !showZero && (label as number) <= 0)

    const computedOffset = useValue(offset)

    const renderLabel = useMemo(() => {
      if (numeric) {
        if ((label as number) > overflowCount) {
          return (
            <>
              {overflowCount}
              <styled.span lineHeight={1}>+</styled.span>
            </>
          )
        } else {
          return label
        }
      } else {
        return label
      }
    }, [numeric, label, overflowCount])

    const getRootProps: PropGetter = (props) => ({
      className,
      css: rootCssProps,
      ...containerProps,
      ...props,
    })

    const getIconProps: PropGetter = (props) => ({
      ...rest,
      "data-numeric": dataAttr(numeric),
      ...props,
      vars: mergeVars(vars, {
        name: "offset",
        token: "spaces",
        value: computedOffset,
      }),
    })

    const getPingProps: PropGetter = (props) => ({
      animation,
      ...props,
      vars: mergeVars(vars, {
        name: "pingColor",
        token: "colors",
        value: pingColor,
      }),
    })

    return (
      <styled.div {...getRootProps()}>
        {!trulyDisabled ? (
          <IndicatorIcon {...getIconProps()}>
            {renderLabel}
            {ping ? <IndicatorPing {...getPingProps()} /> : null}
          </IndicatorIcon>
        ) : null}
        {children}
      </styled.div>
    )
  },
  "root",
)()

interface IndicatorIconProps extends HTMLStyledProps {}

const IndicatorIcon = withContext<"div", IndicatorIconProps>("div", "icon")()

interface IndicatorPingProps extends HTMLStyledProps {}

const IndicatorPing = withContext<"div", IndicatorPingProps>("div", "ping")()
