import type { ThemeProps } from "@yamada-ui/core"
import { omitThemeProps, useComponentMultiStyle } from "@yamada-ui/core"
import type { MotionProps, MotionTransition } from "@yamada-ui/motion"
import { motionForwardRef, motion } from "@yamada-ui/motion"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import type { Merge } from "@yamada-ui/utils"
import { cx, dataAttr, useSafeLayoutEffect } from "@yamada-ui/utils"
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
  [key in FlipOrientation]: {
    from: MotionState
    to: MotionState
  }
}

const variants: FlipMotion = {
  horizontal: {
    from: {
      initial: { rotateY: 0 },
      animate: (isVisible: boolean) => ({
        rotateY: isVisible ? 180 : 0,
      }),
    },
    to: {
      initial: { rotateY: 180 },

      animate: (isVisible: boolean) => ({
        rotateY: isVisible ? 0 : 180,
      }),
    },
  },
  vertical: {
    from: {
      initial: { rotateX: 0 },
      animate: (isVisible: boolean) => ({
        rotateX: isVisible ? 180 : 0,
      }),
    },
    to: {
      initial: { rotateX: 180 },
      animate: (isVisible: boolean) => ({
        rotateX: isVisible ? 0 : 180,
      }),
    },
  },
}

export type FlipIdent = "from" | "to"

export type FlipOrientation = "horizontal" | "vertical"

export interface FlipOptions {
  /**
   * Passing React elements to "from" and "to" is required.
   */
  from: ReactElement
  to: ReactElement
  /**
   * Use this when you want to control the animation from outside the component.
   */
  value?: FlipIdent
  onChange?: () => void
  /**
   * You can set the initial state.
   *
   * @default 'from'
   */
  defaultValue?: FlipIdent
  /**
   * The orientation of the flip effect. Determines whether the flip occurs horizontally or vertically.
   *
   * @default 'horizontal'
   */
  orientation?: FlipOrientation
  /**
   * The animation transition.
   *
   * @default {}
   */
  transition?: MotionTransition
  /**
   * The animation duration.
   *
   * @default 0.2
   */
  duration?: number
  /**
   *　The animation delay.
   *
   * @default 0
   */
  delay?: number
  /**
   * If `true`, the component is disabled.
   *
   * @default false
   */
  isDisabled?: boolean
  /**
   * If `true`, the component is readonly.
   *
   * @default false
   */
  isReadOnly?: boolean
}

export interface FlipProps
  extends Merge<MotionProps<"button">, FlipOptions>,
    ThemeProps<"Flip"> {}

/**
 * `Flip` is an animation component that alternates between flipping two elements.
 *
 * @see Docs https://yamada-ui.com/components/transitions/flip
 */
export const Flip = motionForwardRef<FlipProps, "button">((props, ref) => {
  const [dimensions, setDimensions] = useState<{
    width?: number
    height?: number
  }>({})
  const fromRef = useRef<HTMLDivElement | null>(null)
  const toRef = useRef<HTMLDivElement | null>(null)

  const [styles, mergedProps] = useComponentMultiStyle("Flip", props)
  const {
    from,
    to,
    value: valueProp,
    defaultValue = "from",
    onChange: onChangeProp,
    orientation = "horizontal",
    transition = {},
    duration = 0.2,
    delay = 0,
    isDisabled = false,
    isReadOnly = false,
    className,
    ...rest
  } = omitThemeProps(mergedProps)

  const [value, setValue] = useControllableState({
    value: valueProp,
    defaultValue: defaultValue,
    onChange: onChangeProp,
  })

  const isVisible = value === "to"

  const switchVisibility = () => {
    if (isReadOnly) return

    setValue((prev) => (prev === "from" ? "to" : "from"))
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
    <motion.button
      type="button"
      ref={ref}
      disabled={isDisabled}
      data-value={value}
      data-disabled={dataAttr(isDisabled)}
      data-readonly={dataAttr(isReadOnly)}
      className={cx("ui-flip", `ui-flip__${orientation}`, className)}
      __css={{
        w: dimensions.width ? `${dimensions.width}px` : "auto",
        h: dimensions.height ? `${dimensions.height}px` : "auto",
        ...styles.container,
      }}
      onClick={switchVisibility}
      {...rest}
    >
      <motion.span
        ref={fromRef}
        custom={isVisible}
        className={cx(
          "ui-flip__from",
          `ui-flip__from--${orientation}`,
          className,
        )}
        variants={variants[orientation].from}
        initial="initial"
        animate="animate"
        __css={{
          ...styles.flipIdent,
          ...styles.from,
        }}
        transition={{
          duration,
          delay,
          ...transition,
        }}
      >
        {from}
      </motion.span>

      <motion.span
        ref={toRef}
        custom={isVisible}
        className={cx("ui-flip__to", `ui-flip__to--${orientation}`, className)}
        variants={variants[orientation].to}
        initial="initial"
        animate="animate"
        __css={{
          ...styles.flipIdent,
          ...styles.to,
        }}
        transition={{
          duration,
          delay,
          ...transition,
        }}
      >
        {to}
      </motion.span>
    </motion.button>
  )
})

Flip.displayName = "Flip"
Flip.__ui__ = "Flip"