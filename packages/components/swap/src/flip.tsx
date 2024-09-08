import type { ThemeProps } from "@yamada-ui/core"
import { useComponentStyle } from "@yamada-ui/core"
import type { MotionProps, WithTransitionProps } from "@yamada-ui/motion"
import { motionForwardRef, motion } from "@yamada-ui/motion"
import { cx } from "@yamada-ui/utils"
import { useState } from "react"
import type { SwapElements } from "./swap"

type FlipDirection = "horizontal" | "vertical"

type FlipProps = {
  flipDirection: FlipDirection
} & WithTransitionProps<MotionProps> &
  ThemeProps<"Flip"> &
  SwapElements

type Rotate = {
  rotateY?: number
  rotateX?: number
}

type MotionState = {
  initial: Rotate
  animate: (isVisible: boolean) => Rotate
}

type FlipMotion = {
  [key in FlipDirection]: {
    from: MotionState
    to: MotionState
  }
}

const flipMotion: FlipMotion = {
  horizontal: {
    from: {
      initial: { rotateY: 0 },
      animate: (isVisible: boolean) => ({ rotateY: isVisible ? 180 : 0 }),
    },
    to: {
      initial: { rotateY: 180 },
      animate: (isVisible: boolean) => ({ rotateY: isVisible ? 0 : 180 }),
    },
  },
  vertical: {
    from: {
      initial: { rotateX: 0 },
      animate: (isVisible: boolean) => ({ rotateX: isVisible ? 180 : 0 }),
    },
    to: {
      initial: { rotateX: 180 },
      animate: (isVisible: boolean) => ({ rotateX: isVisible ? 0 : 180 }),
    },
  },
}

export const Flip = motionForwardRef<FlipProps, "div">((props, ref) => {
  const [style, mergedProps] = useComponentStyle("Flip", props)
  const [isVisible, setIsVisible] = useState(false)

  const { from, to, flipDirection, className, ...rest } = mergedProps

  const switchVisibility = () => {
    setIsVisible((prev) => !prev)
  }

  return (
    <motion.div
      ref={ref}
      style={{
        position: "relative",
        perspective: 1000, // 원근감을 주기 위한 설정
      }}
    >
      <motion.div
        custom={isVisible}
        className={cx(`ui-swap__${flipDirection}-flip-from`, className)}
        onClick={switchVisibility}
        variants={flipMotion[flipDirection].from}
        initial="initial"
        animate="animate"
        __css={style}
        style={{
          position: "absolute",
          top: 0,
          backfaceVisibility: "hidden",
        }}
        {...rest}
      >
        {from}
      </motion.div>

      <motion.div
        custom={isVisible}
        className={cx(`ui-swap__${flipDirection}-flip-to`, className)}
        onClick={switchVisibility}
        variants={flipMotion[flipDirection].to}
        initial="initial"
        animate="animate"
        __css={style}
        style={{
          position: "absolute",
          top: 0,
          backfaceVisibility: "hidden",
        }}
        {...rest}
      >
        {to}
      </motion.div>
    </motion.div>
  )
})
