import type { ReactNode } from "react"
import type {
  AnimationStyle,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  Token,
} from "../../core"
import { useMemo } from "react"
import { forwardRef, omitThemeProps, ui, useComponentStyle } from "../../core"
import { useAnimation } from "../../hooks/use-animation"
import { useValue } from "../../hooks/use-value"
import { cx } from "../../utils"

interface IndicatorOptions {
  children: ReactNode
  /**
   * If `true`, the indicator will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * If `true`, set the indicator as an inline element.
   *
   * @default false
   * */
  inline?: Token<boolean>
  /**
   * The indicator label to use.
   */
  label?: ReactNode
  /**
   * Changes position offset, usually used when element has border-radius.
   *
   * @default 0
   */
  offset?: Token<number>
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
  pingColor?: HTMLUIProps["backgroundColor"]
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
  /**
   * It is used for the scale of the ping animation.
   *
   * @default 1.8
   */
  pingScale?: number
  /**
   * The placement of the indicator.
   *
   * @default 'top-right'
   */
  placement?: Token<
    | "bottom"
    | "bottom-left"
    | "bottom-right"
    | "left"
    | "right"
    | "top"
    | "top-left"
    | "top-right"
  >
  /**
   * If `true`, display 0.
   *
   * @default true
   */
  showZero?: boolean
  /**
   * If `true`, display the border of the indicator.
   *
   * @default false
   */
  withBorder?: boolean
  /**
   * Props for indicator wrapper element.
   */
  containerProps?: Omit<HTMLUIProps, "children">
}

export interface IndicatorProps
  extends Omit<HTMLUIProps, "children" | "offset">,
    ThemeProps<"Indicator">,
    IndicatorOptions {}

const getPlacementStyle = (
  placement:
    | "bottom"
    | "bottom-left"
    | "bottom-right"
    | "left"
    | "right"
    | "top"
    | "top-left"
    | "top-right",
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
  const {
    className,
    children,
    disabled,
    inline = false,
    label,
    offset = 0,
    overflowCount = 99,
    ping,
    pingColor = "$ping",
    pingCount = "infinite",
    pingDuration = "1.4s",
    pingScale = 1.8,
    placement = "top-right",
    showZero = true,
    containerProps,
    ...rest
  } = omitThemeProps(mergedProps, ["withBorder"])
  const animation = useAnimation({
    duration: pingDuration,
    fillMode: "forwards",
    iterationCount: pingCount,
    keyframes: {
      "75%, 100%": {
        opacity: 0,
        transform: `scale(${pingScale})`,
      },
    },
    timingFunction: "cubic-bezier(0, 0, 0.2, 1)",
  })
  const numeric = typeof label === "number"
  const trulyDisabled =
    disabled ?? (numeric && !showZero && (label as number) <= 0)

  const computedInline = useValue(inline)
  const computedPlacement = useValue(placement)
  const computedOffset = useValue(offset)

  const renderLabel = useMemo(() => {
    if (numeric) {
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
  }, [numeric, label, overflowCount])

  const css: CSSUIObject = {
    position: "absolute",
    ...getPlacementStyle(computedPlacement, computedOffset),
    ...(numeric ? { fontWeight: "medium" } : {}),
    ...styles,
  }

  return (
    <ui.div
      ref={ref}
      className={cx("ui-indicator", className)}
      __css={{
        display: computedInline ? "inline-block" : "block",
        position: "relative",
      }}
      {...containerProps}
    >
      {!trulyDisabled ? (
        <ui.div
          ref={ref}
          className={cx("ui-indicator__icon", className)}
          __css={css}
          {...rest}
        >
          {renderLabel}

          {ping ? (
            <ui.div
              className="ui-indicator__icon__ping"
              animation={animation}
              __css={{
                bg: pingColor,
                boxSize: "100%",
                opacity: 0.75,
                position: "absolute",
                rounded: "fallback(full, 9999px)",
                zIndex: -1,
              }}
            />
          ) : null}
        </ui.div>
      ) : null}

      {children}
    </ui.div>
  )
})

Indicator.displayName = "Indicator"
Indicator.__ui__ = "Indicator"
