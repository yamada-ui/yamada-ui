import type { CSSUIObject, ThemeProps } from "@yamada-ui/core"
import { omitThemeProps, useMultiComponentStyle } from "@yamada-ui/core"
import type { MotionProps, MotionTransition } from "@yamada-ui/motion"
import { motionForwardRef, motion } from "@yamada-ui/motion"
import type { Merge } from "@yamada-ui/utils"
import { cx, useSafeLayoutEffect } from "@yamada-ui/utils"
import { useRef, useState, type ReactElement } from "react"

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

const variants: FlipMotion = {
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

export type FlipDirection = "horizontal" | "vertical"

type FlipOptions = {
  from: ReactElement
  to: ReactElement
  /**
   * The orientation of the flip effect. Determines whether the flip occurs horizontally or vertically.
   *
   * @default 'horizontal'
   */
  orientation?: FlipDirection
  transition?: MotionTransition
}

export type FlipProps = Merge<MotionProps, FlipOptions> & ThemeProps<"Flip">
/**
 * `Flip` is component.
 *
 * @see Docs https://yamada-ui.com/components/transitions/flip
 */
export const Flip = motionForwardRef<FlipProps, "div">((props, ref) => {
  const [isVisible, setIsVisible] = useState(false)
  const [dimensions, setDimensions] = useState<{
    width?: number
    height?: number
  }>({})
  const fromRef = useRef<HTMLDivElement | null>(null)
  const toRef = useRef<HTMLDivElement | null>(null)

  const [styles, mergedProps] = useMultiComponentStyle("Flip", props)
  const {
    from,
    to,
    orientation = "horizontal",
    transition = {
      type: "spring",
      stiffness: 80,
      damping: 10,
    },
    className,
    ...rest
  } = omitThemeProps(mergedProps)

  const css: CSSUIObject = {
    ...styles,
  }

  const switchVisibility = () => {
    setIsVisible((prev) => !prev)
  }

  useSafeLayoutEffect(() => {
    const fromElement = fromRef?.current
    const toElement = toRef?.current

    if (!fromElement || !toElement) return

    const fromWidth = fromElement.offsetWidth
    const fromHeight = fromElement.offsetHeight
    const toWidth = toElement.offsetWidth
    const toHeight = toElement.offsetHeight

    /**
     * Since the width and height of the 'to' element and 'from' element must be the same for the animation to behave correctly,
     * I have added the following error handling.
     */
    if (fromWidth !== toWidth || fromHeight !== toHeight) {
      console.warn(
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
      className={cx(`ui-flip__${orientation}`, className)}
      __css={{
        position: "relative",
        w: dimensions.width ? `${dimensions.width}px` : "auto",
        h: dimensions.height ? `${dimensions.height}px` : "auto",
        //FIXME
        ...css,
      }}
      onClick={switchVisibility}
      {...rest}
    >
      <motion.div
        ref={fromRef}
        custom={isVisible}
        className={cx(`ui-flip__${orientation}-from`, className)}
        variants={variants[orientation].from}
        initial="initial"
        animate="animate"
        __css={flipStyle}
        transition={transition}
      >
        {from}
      </motion.div>

      <motion.div
        ref={toRef}
        custom={isVisible}
        className={cx(`ui-flip__${orientation}-to`, className)}
        variants={variants[orientation].to}
        initial="initial"
        animate="animate"
        __css={flipStyle}
        transition={transition}
      >
        {to}
      </motion.div>
    </motion.div>
  )
})
