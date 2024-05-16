import type { CSSUIProps, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  ui,
} from "@yamada-ui/core"
import { motion, useMotionValue, useTransform } from "@yamada-ui/motion"
import type { Merge } from "@yamada-ui/utils"
import { cx, mergeRefs, runIfFunc } from "@yamada-ui/utils"
import { useRef, useState } from "react"
import type { UseSwipeableProps } from "./use-swipeable"

type ActionProps = {}

type SwipeableOptions = {
  /**
   * Displayed when swiping left.
   */
  renderLeftActions?: Merge<
    HTMLUIProps<"button">,
    {
      children: (props?: ActionProps) => React.ReactElement
    }
  >[]
  //NOTE: UIValue<"number">
  maxLeftSwipe?: number
  maxRightSwipe?: number
  leftActionProps?: CSSUIProps
  /**
   * Displayed when swiping right.
   */
  renderRightActions?: Merge<
    HTMLUIProps<"button">,
    {
      children: (props?: ActionProps) => React.ReactElement
    }
  >[]
}

export type SwipeableProps = HTMLUIProps<"div"> &
  ThemeProps<"Swipeable"> &
  SwipeableOptions &
  UseSwipeableProps

export type SwipeableDirection = "right" | "left" | "none"

export const Swipeable = forwardRef<SwipeableProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("Swipeable", props)
  const {
    className,
    children,
    renderLeftActions,
    renderRightActions,
    dragElastic = 0.7,
    leftThreshold: leftThreasholdProp,
    rightThreshold: rightThreasholdProp,
    //NOTE:なんのやつかわからん
    // dragOffsetFromLeftEdge,
    // dragOffsetFromRightEdge,
    // overshootFriction,
    // overshootLeft = true,
    // overshootRight = true,
    // onSwipeableOpen,
    // onSwipeableClose,
    // onSwipeableWillOpen,
    // onSwipeableWillClose,
    maxLeftSwipe,
    maxRightSwipe,
    ...rest
  } = omitThemeProps(mergedProps)

  const [direction, setDirection] = useState<SwipeableDirection>("none")
  const componentRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const translateX = useMotionValue(0)

  const width = componentRef.current?.offsetWidth ?? 0
  const height = componentRef.current?.offsetHeight ?? 0
  const leftThreshold = leftThreasholdProp ?? width / 2
  const rightThreshold = rightThreasholdProp ?? width / 2

  let animateTranslateX: number

  if (direction === "right") {
    animateTranslateX = maxLeftSwipe ?? width
  } else if (direction === "left") {
    animateTranslateX = -(maxRightSwipe ?? width)
  } else {
    animateTranslateX = 0
  }

  const leftActionsWidth = useTransform(
    [x, translateX],
    ([x, translateX]: number[]) => {
      const delta = x + translateX

      if (delta > 0) {
        if (maxLeftSwipe && delta > maxLeftSwipe) return maxLeftSwipe

        return delta
      }

      return 0
    },
  )

  const rightActionsWidth = useTransform(
    [x, translateX],
    ([x, translateX]: number[]) => {
      const delta = x + translateX
      if (delta < 0) {
        if (maxRightSwipe && -delta > maxRightSwipe) return maxRightSwipe

        return -delta
      }

      return 0
    },
  )

  const cloneChildren =
    typeof children === "string" ? <p>{children}</p> : children

  const handleDragEnd = () =>
    // event: MouseEvent | TouchEvent | PointerEvent,
    // info: any,
    {
      if (
        (direction === "right" && x.get() < -leftThreshold) ||
        (direction === "left" && x.get() > rightThreshold)
      ) {
        setDirection("none")
      } else {
        if (x.get() > leftThreshold) {
          setDirection("right")
        } else if (x.get() < -rightThreshold) {
          setDirection("left")
        }
      }
    }

  return (
    <ui.div
      position="relative"
      __css={{ px: "normal", py: "normal", ...styles.container }}
      {...rest}
    >
      <motion.div
        ref={mergeRefs(ref, componentRef)}
        className={cx("ui-swipeable", className)}
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        dragElastic={dragElastic}
        onDragEnd={handleDragEnd}
        animate={{
          translateX: animateTranslateX,
        }}
        transition={{ type: "spring", bounce: 0 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          border: "solid",
          x,
          translateX,
        }}
      >
        {cloneChildren}
      </motion.div>

      {/*  left-actions */}
      <motion.div
        className={cx("ui-swipeable__left-action", className)}
        // ref={ref}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height,
          width: leftActionsWidth,
          overflow: "hidden",
        }}
      >
        <ui.div
          __css={{
            zIndex: -1,
            w: "100%",
            h: "100%",
            display: "grid",
            ...styles.swipeableLeftAction,
          }}
          gridTemplateColumns={`repeat(${renderLeftActions?.length ?? 0},1fr)`}
          {...rest}
          onClick={() => {
            setDirection("none")
          }}
        >
          {renderLeftActions?.map(({ children, ...rest }, index) => (
            <ui.button key={index} {...rest}>
              {runIfFunc(children, {})}
            </ui.button>
          ))}
        </ui.div>
      </motion.div>

      {/* right-actions */}
      <motion.div
        className={cx("ui-swipeable__right-action", className)}
        // ref={ref}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          height,
          width: rightActionsWidth,
          overflow: "hidden",
        }}
      >
        <ui.div
          __css={{
            zIndex: -1,
            w: maxRightSwipe ?? "100%",
            h: "100%",
            display: "grid",
            ...styles.swipeableRightAction,
          }}
          gridTemplate={`repeat(${renderRightActions?.length ?? 0},1fr)`}
          {...rest}
          onClick={() => {
            setDirection("none")
          }}
        >
          {renderRightActions?.map(({ children, ...rest }, index) => (
            <ui.button key={index} {...rest}>
              {runIfFunc(children, {})}
            </ui.button>
          ))}
        </ui.div>
      </motion.div>
    </ui.div>
  )
})
