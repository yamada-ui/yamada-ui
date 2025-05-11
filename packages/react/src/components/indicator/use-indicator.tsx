import type { ReactNode } from "react"
import type {
  CSSAnimationObject,
  CSSObject,
  HTMLStyledProps,
  PropGetter,
  StyleValue,
} from "../../core"
import { useCallback } from "react"
import { useAnimation } from "../../hooks/use-animation"
import { useValue } from "../../hooks/use-value"
import { dataAttr } from "../../utils"

export interface UseIndicatorProps extends Omit<HTMLStyledProps, "offset"> {
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
   * The placement of the indicator.
   *
   * @default 'top-right'
   */
  placement?: StyleValue<
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
   * Props for indicator wrapper element.
   */
  containerProps?: Omit<HTMLStyledProps, "children">
}

export const useIndicator = ({
  className,
  css: rootCssProps,
  label,
  offset = 0,
  pingColor = "{ping}",
  pingCount = "infinite",
  pingDuration = "1.4s",
  pingScale = 1.8,
  placement = "top-right",
  containerProps,
  ...rest
}: UseIndicatorProps) => {
  const numeric = typeof label === "number"
  const computedPlacement = useValue(placement)
  const computedOffset = useValue(offset)

  const getRootProps: PropGetter = useCallback(
    (props) => ({
      className,
      css: rootCssProps,
      ...containerProps,
      ...props,
    }),
    [className, containerProps, rootCssProps],
  )

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
  ): CSSObject => {
    const styles: CSSObject = {}
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

  const getIconProps: PropGetter = useCallback(
    (props) => ({
      ...getPlacementStyle(computedPlacement, computedOffset),
      ...rest,
      "data-numeric": dataAttr(numeric),
      ...props,
    }),
    [computedOffset, computedPlacement, numeric, rest],
  )

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

  const getPingProps: PropGetter = useCallback(
    (props) => ({
      animation,
      bg: pingColor,
      ...props,
    }),
    [animation, pingColor],
  )

  return {
    label,
    numeric,
    getIconProps,
    getPingProps,
    getRootProps,
  }
}

export type UseIndicatorReturn = ReturnType<typeof useIndicator>
