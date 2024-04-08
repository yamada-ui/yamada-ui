import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  ui,
} from "@yamada-ui/core"
import type { MotionValue } from "@yamada-ui/motion"
import { motion, useMotionValue } from "@yamada-ui/motion"
import { createContext, cx, mergeRefs } from "@yamada-ui/utils"
import { useRef, useState } from "react"

type SwipeableContextOptions = {
  height: number
  x: MotionValue<number>
  translateX: MotionValue<number>
  setDirection: React.Dispatch<React.SetStateAction<SwipeableDirection>>
}
type SwipeableContext = Record<string, CSSUIObject> & SwipeableContextOptions

export const [SwipeableProvider, useSwipeable] =
  createContext<SwipeableContext>({
    strict: false,
    name: "SwipeableContext",
  })

type SwipeableOptions = {}

export type SwipeableProps = HTMLUIProps<"div"> &
  ThemeProps<"Swipeable"> &
  SwipeableOptions

export type SwipeableDirection = "right" | "left" | "none"

export const Swipeable = forwardRef<SwipeableProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("Swipeable", props)
  const { className, children, ...rest } = omitThemeProps(mergedProps)

  const css: CSSUIObject = { px: "normal", py: "normal", ...styles.container }

  const [direction, setDirection] = useState<SwipeableDirection>("none")
  const componentRef = useRef<HTMLDivElement>(null)
  const width = componentRef.current?.offsetWidth ?? 0
  const height = componentRef.current?.offsetHeight ?? 0
  const x = useMotionValue(0)
  const translateX = useMotionValue(0)

  const handleDragEnd = () =>
    // event: MouseEvent | TouchEvent | PointerEvent,
    // info: any,
    {
      if (
        (direction === "right" && x.get() < -width / 3) ||
        (direction === "left" && x.get() > width / 3)
      ) {
        setDirection("none")
      } else {
        if (x.get() > width / 2) {
          setDirection("right")
        } else if (x.get() < -width / 2) {
          setDirection("left")
        }
      }
    }

  return (
    <SwipeableProvider
      value={
        {
          height,
          x,
          translateX,
          setDirection,
          ...styles,
        } as SwipeableContext
      }
    >
      <ui.div position="relative" __css={css} {...rest}>
        <motion.div
          ref={mergeRefs(ref, componentRef)}
          className={cx("ui-swipeable", className)}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={handleDragEnd}
          animate={{
            translateX:
              direction === "right" ? width : direction === "left" ? -width : 0,
          }}
          transition={{ damping: 100 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "solid",
            x,
            translateX,
          }}
        />
        {children}
      </ui.div>
    </SwipeableProvider>
  )
})
