import type { HTMLUIProps } from "@yamada-ui/core"
import { forwardRef, ui } from "@yamada-ui/core"
import { motion, useTransform } from "@yamada-ui/motion"
import { cx } from "@yamada-ui/utils"
import { useSwipeable } from "./swipeable"

type SwipeableLeftActionOptions = {}

export type SwipeableLeftActionProps = HTMLUIProps<"div"> &
  SwipeableLeftActionOptions

export const SwipeableLeftAction = forwardRef<SwipeableLeftActionProps, "div">(
  ({ className, children, ...rest }, ref) => {
    const { height, x, translateX, setDirection, ...styles } = useSwipeable()
    const width = useTransform([x, translateX], ([x, translateX]: number[]) => {
      const delta = x + translateX
      if (delta > 0) return delta
      return 0
    })

    return (
      <motion.div
        className={cx("ui-swipeable__right-action", className)}
        ref={ref}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height,
          width,
          overflow: "hidden",
        }}
      >
        <ui.div
          __css={{
            zIndex: -1,
            w: "100%",
            h: "100%",
            whiteSpace: "nowrap",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            background: "green.500",
            px: 4,
            ...styles.swipeableLeftAction,
          }}
          {...rest}
          onClick={() => {
            setDirection("none")
          }}
        >
          {children}
        </ui.div>
      </motion.div>
    )
  },
)
