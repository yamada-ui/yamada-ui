import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  ui,
} from "@yamada-ui/core"
import { motion } from "@yamada-ui/motion"
import { cx, runIfFunc } from "@yamada-ui/utils"
import { useSwipeable, type UseSwipeableOptions } from "./use-swipeable"

type SwipeableOptions = {}

export type SwipeableProps = HTMLUIProps<"div"> &
  ThemeProps<"Swipeable"> &
  SwipeableOptions &
  UseSwipeableOptions

export type SwipeableDirection = "right" | "left" | "none"

export const Swipeable = forwardRef<SwipeableProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("Swipeable", props)
  const {
    className,
    children,
    renderLeftActions,
    renderRightActions,
    dragElastic,
    leftThreshold: leftThreasholdProp,
    rightThreshold: rightThreasholdProp,
    dragOffsetFromLeftEdge,
    dragOffsetFromRightEdge,
    overshootFriction,
    overshootLeft,
    overshootRight,
    onSwipeableOpen,
    onSwipeableClose,
    onSwipeableWillOpen,
    onSwipeableWillClose,
    maxLeftSwipe,
    maxRightSwipe,
    ...rest
  } = omitThemeProps(mergedProps)

  const {
    getSwipeableProps,
    getRightActionsMotionProps,
    getRightActionsContainerProps,
    getLeftActionsMotionProps,
    getLeftActionsContainerProps,
  } = useSwipeable({
    renderLeftActions,
    renderRightActions,
    dragElastic,
    leftThreshold: leftThreasholdProp,
    rightThreshold: rightThreasholdProp,
    dragOffsetFromLeftEdge,
    dragOffsetFromRightEdge,
    overshootFriction,
    overshootLeft,
    overshootRight,
    onSwipeableOpen,
    onSwipeableClose,
    onSwipeableWillOpen,
    onSwipeableWillClose,
    maxLeftSwipe,
    maxRightSwipe,
    styles,
  })

  const cloneChildren =
    typeof children === "string" ? <p>{children}</p> : children

  return (
    <ui.div
      className={cx(className, "")}
      position="relative"
      __css={{ px: "normal", py: "normal", ...styles.container }}
      {...rest}
    >
      <motion.div {...getSwipeableProps({ className: "ui-swipeable" }, ref)}>
        {cloneChildren}
      </motion.div>

      {/*  left-actions */}
      <motion.div
        {...getLeftActionsMotionProps({
          className: "ui-swipeable__left-action",
        })}
      >
        <ui.div
          {...getLeftActionsContainerProps({
            className: "ui-swipeable__left-action-container",
          })}
        >
          {renderLeftActions?.map(({ children, ...rest }, index) => (
            <ui.button key={index} __css={{ overflow: "hidden" }} {...rest}>
              {runIfFunc(children, {})}
            </ui.button>
          ))}
        </ui.div>
      </motion.div>

      {/* right-actions */}
      <motion.div
        {...getRightActionsMotionProps({
          className: "ui-swipeable__right-action",
        })}
      >
        <ui.div
          {...getRightActionsContainerProps({
            className: "ui-swipeable__right-action-container",
          })}
        >
          {renderRightActions?.map(({ children, ...rest }, index) => (
            <ui.button key={index} __css={{ overflow: "hidden" }} {...rest}>
              {runIfFunc(children, {})}
            </ui.button>
          ))}
        </ui.div>
      </motion.div>
    </ui.div>
  )
})
