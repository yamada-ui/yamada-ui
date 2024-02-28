import type {
  AnimationStyle,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  Token,
} from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  omitThemeProps,
  useComponentStyle,
} from "@yamada-ui/core"
import { useAnimation } from "@yamada-ui/use-animation"
import { useValue } from "@yamada-ui/use-value"
import { cx, omitObject } from "@yamada-ui/utils"
import type { ReactNode } from "react"
import { useMemo } from "react"

type IndicatorOptions = {
  children: ReactNode
  /**
   * If `true`, set the indicator as an inline element.
   *
   * @default false
   * */
  inline?: Token<boolean>
  /**
   * The placement of the indicator.
   *
   * @default 'top-right'
   */
  placement?: Token<
    | "top"
    | "top-left"
    | "top-right"
    | "left"
    | "right"
    | "bottom"
    | "bottom-left"
    | "bottom-right"
  >
  /**
   * Changes position offset, usually used when element has border-radius.
   *
   * @default 0
   */
  offset?: Token<number>
  /**
   * The indicator label to use.
   */
  label?: ReactNode
  /**
   * If `label` is of type number, the maximum number displayed.
   *
   * @default 99
   */
  overflowCount?: number
  /**
   * If `true`, display 0.
   *
   * @default true
   */
  showZero?: boolean
  /**
   * If `true`, the indicator will be disabled.
   *
   * @default false
   */
  isDisabled?: boolean
  /**
   * If `true`, display the border of the indicator.
   *
   * @default false
   */
  withBorder?: boolean
  /**
   * Props for indicator wrapper element.
   */
  containerProps?: Omit<HTMLUIProps<"div">, "children">
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
  pingColor?: HTMLUIProps<"div">["backgroundColor"]
  /**
   * It is used for the scale of the ping animation.
   *
   * @default 1.8
   */
  pingScale?: number
  /**
   * It is used for the count of the ping animation.
   *
   * @default "infinite"
   */
  pingCount?: AnimationStyle["iterationCount"]
  /**
   * It is used for the duration of the ping animation.
   *
   * @default "1.4s"
   */
  pingDuration?: AnimationStyle["direction"]
}

export type IndicatorProps = Omit<HTMLUIProps<"div">, "children" | "offset"> &
  ThemeProps<"Indicator"> &
  IndicatorOptions

const getPlacementStyle = (
  placement:
    | "top"
    | "top-left"
    | "top-right"
    | "left"
    | "right"
    | "bottom"
    | "bottom-left"
    | "bottom-right",
  offset: number,
): CSSUIObject => {
  const styles: CSSUIObject = {}
  let translateX = ""
  let translateY = ""

  if (placement.includes("top")) {
    styles.top = offset
    translateY = "-50%"
  } else if (placement.includes("bottom")) {
    styles.bottom = offset
    translateY = "50%"
  } else {
    styles.top = "50%"
    translateY = "-50%"
  }

  if (placement.includes("left")) {
    styles.left = offset
    translateX = "-50%"
  } else if (placement.includes("right")) {
    styles.right = offset
    translateX = "50%"
  } else {
    styles.left = "50%"
    translateX = "-50%"
  }

  styles.transform = `translate(${translateX}, ${translateY})`

  return styles
}

/**
 * `Indicator` is a component that displays at the corner of elements such as avatars.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/indicator
 */
export const Indicator = forwardRef<IndicatorProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentStyle("Indicator", props)
  let {
    className,
    inline = false,
    placement = "top-right",
    offset = 0,
    label,
    overflowCount = 99,
    showZero = true,
    children,
    isDisabled,
    containerProps,
    ping,
    pingColor = "var(--ui-ping)",
    pingDuration = "1.4s",
    pingCount = "infinite",
    pingScale = 1.8,
    ...rest
  } = omitThemeProps(mergedProps)
  const animation = useAnimation({
    keyframes: {
      "75%, 100%": {
        transform: `scale(${pingScale})`,
        opacity: 0,
      },
    },
    fillMode: "forwards",
    duration: pingDuration,
    timingFunction: "cubic-bezier(0, 0, 0.2, 1)",
    iterationCount: pingCount,
  })

  const isNumeric = typeof label === "number"

  if (isNumeric && !showZero && (label as number) <= 0) isDisabled ??= true

  const computedInline = useValue(inline)
  const computedPlacement = useValue(placement)
  const computedOffset = useValue(offset)

  const renderLabel = useMemo(() => {
    if (isNumeric) {
      if ((label as number) > overflowCount) {
        return (
          <>
            {overflowCount}
            <ui.span lineHeight={1}>+</ui.span>
          </>
        )
      } else {
        return label
      }
    } else {
      return label
    }
  }, [isNumeric, label, overflowCount])

  const css: CSSUIObject = {
    position: "absolute",
    ...getPlacementStyle(computedPlacement, computedOffset),
    ...(isNumeric ? { fontWeight: "medium" } : {}),
    ...styles,
  }

  return (
    <ui.div
      ref={ref}
      className={cx("ui-indicator", className)}
      __css={{
        position: "relative",
        display: computedInline ? "inline-block" : "block",
      }}
      {...containerProps}
    >
      {!isDisabled ? (
        <ui.div
          ref={ref}
          className={cx("ui-indicator__icon", className)}
          __css={css}
          {...omitObject(rest, ["withBorder"])}
        >
          {renderLabel}

          {ping ? (
            <ui.div
              className="ui-indicator__icon__ping"
              __css={{
                position: "absolute",
                boxSize: "100%",
                rounded: "9999px",
                opacity: 0.75,
                zIndex: -1,
                bg: pingColor,
              }}
              animation={animation}
            />
          ) : null}
        </ui.div>
      ) : null}

      {children}
    </ui.div>
  )
})
