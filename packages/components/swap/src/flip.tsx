import type { CSSUIObject, ThemeProps } from "@yamada-ui/core"
import { useComponentStyle } from "@yamada-ui/core"
import type { MotionProps, WithTransitionProps } from "@yamada-ui/motion"
import { motionForwardRef, motion } from "@yamada-ui/motion"
import { cx } from "@yamada-ui/utils"
import { useLayoutEffect, useRef, useState } from "react"
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

const flipStyle: CSSUIObject = {
  position: "absolute",
  top: 0,
  backfaceVisibility: "hidden",
}

export const Flip = motionForwardRef<FlipProps, "div">((props, ref) => {
  const [style, mergedProps] = useComponentStyle("Flip", props)
  const [isVisible, setIsVisible] = useState(false)
  const [dimensions, setDimensions] = useState<{
    width?: number
    height?: number
  }>({})
  const fromRef = useRef<HTMLDivElement | null>(null)
  const toRef = useRef<HTMLDivElement | null>(null)

  const { from, to, flipDirection, className, ...rest } = mergedProps

  const switchVisibility = () => {
    setIsVisible((prev) => !prev)
  }

  useLayoutEffect(() => {
    const fromElement = fromRef?.current
    const toElement = toRef?.current

    if (!fromElement || !toElement) return

    const fromWidth = fromElement.offsetWidth
    const fromHeight = fromElement.offsetHeight
    const toWidth = toElement.offsetWidth
    const toHeight = toElement.offsetHeight

    // to element, from elementのwidth, heightが同じでないとアニメーションの挙動をおかしくあるから
    // 下記のエラー処理を追加しました
    if (fromWidth !== toWidth || fromHeight !== toHeight) {
      throw new Error(
        `Dimensions do not match: 
        "from" element (Width: ${fromWidth}px, Height: ${fromHeight}px) 
        does not match "to" element (Width: ${toWidth}px, Height: ${toHeight}px). 
        Please ensure both elements have the same dimensions.`,
      )
    }

    setDimensions({ width: fromWidth, height: fromHeight })
  }, [fromRef, toRef])

  return (
    <motion.div
      ref={ref}
      className={cx(`ui-swap__${flipDirection}-flip`, className)}
      __css={{
        position: "relative",
        w: dimensions.width ? `${dimensions.width}px` : "auto",
        h: dimensions.height ? `${dimensions.height}px` : "auto",
        ...style,
      }}
      {...rest}
    >
      <motion.div
        ref={fromRef}
        custom={isVisible}
        className={cx(`ui-swap__${flipDirection}-flip-from`, className)}
        onClick={switchVisibility}
        variants={flipMotion[flipDirection].from}
        initial="initial"
        animate="animate"
        __css={flipStyle}
      >
        {from}
      </motion.div>

      <motion.div
        ref={toRef}
        custom={isVisible}
        className={cx(`ui-swap__${flipDirection}-flip-to`, className)}
        onClick={switchVisibility}
        variants={flipMotion[flipDirection].to}
        initial="initial"
        animate="animate"
        __css={flipStyle}
      >
        {to}
      </motion.div>
    </motion.div>
  )
})
