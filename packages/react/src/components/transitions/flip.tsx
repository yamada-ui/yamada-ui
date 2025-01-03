import type { Transition, Variants } from "motion/react"
import type { ReactElement } from "react"
import type { CSSUIObject, FC, ThemeProps } from "../../core"
import type { Merge } from "../../utils"
import type { MotionProps, MotionTransitionVariants } from "../motion"
import { useRef, useState } from "react"
import { omitThemeProps, useComponentMultiStyle } from "../../core"
import { useControllableState } from "../../hooks/use-controllable-state"
import { cx, dataAttr, useSafeLayoutEffect } from "../../utils"
import { motion } from "../motion"

const variants: Variants = {
  enter: ({ ident, orientation, visible }) => ({
    [orientation === "horizontal" ? "rotateY" : "rotateX"]:
      ident === "from" ? (visible ? 180 : 0) : visible ? 0 : 180,
  }),
  exit: ({ ident, orientation }) => ({
    [orientation === "horizontal" ? "rotateY" : "rotateX"]:
      ident === "from" ? 0 : 180,
  }),
} satisfies MotionTransitionVariants

export type FlipIdent = "from" | "to"

export type FlipOrientation = "horizontal" | "vertical"

export interface FlipOptions {
  /**
   * Passing React elements to "from" is required.
   */
  from: ReactElement
  /**
   * Passing React elements to "to" is required.
   */
  to: ReactElement
  /**
   * You can set the initial state.
   *
   * @default 'from'
   */
  defaultValue?: FlipIdent
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
  disabled?: boolean
  /**
   * The animation duration.
   *
   * @default 0.4
   */
  duration?: number
  /**
   * The orientation of the flip effect. Determines whether the flip occurs horizontally or vertically.
   *
   * @default 'horizontal'
   */
  orientation?: FlipOrientation
  /**
   * If `true`, the component is readonly.
   *
   * @default false
   */
  readOnly?: boolean
  /**
   * The animation transition.
   */
  transition?: Transition
  /**
   * Use this when you want to control the animation from outside the component.
   */
  value?: FlipIdent
  /**
   * This is a callback function that is called when the animation state changes.
   */
  onChange?: (value: FlipIdent) => void
}

const flipProps = {
  animate: "enter",
  initial: "exit",
  variants,
}

export interface FlipProps
  extends Merge<MotionProps<"button">, FlipOptions>,
    ThemeProps<"Flip"> {}

/**
 * `Flip` is an animation component that alternates between flipping two elements.
 *
 * @see Docs https://yamada-ui.com/components/transitions/flip
 */
export const Flip: FC<FlipProps> = (props) => {
  const [dimensions, setDimensions] = useState<{
    height?: number
    width?: number
  }>({})
  const fromRef = useRef<HTMLDivElement | null>(null)
  const toRef = useRef<HTMLDivElement | null>(null)

  const [styles, mergedProps] = useComponentMultiStyle("Flip", props)
  const {
    className,
    defaultValue = "from",
    delay = 0,
    disabled,
    duration = 0.4,
    from,
    orientation = "horizontal",
    readOnly,
    to,
    transition: transitionProp = {},
    value: valueProp,
    onChange: onChangeProp,
    ...rest
  } = omitThemeProps(mergedProps)
  const [value, setValue] = useControllableState({
    defaultValue: defaultValue,
    value: valueProp,
    onChange: onChangeProp,
  })
  const visible = value === "to"
  const css: CSSUIObject = {
    h: dimensions.height ? `${dimensions.height}px` : "auto",
    w: dimensions.width ? `${dimensions.width}px` : "auto",
    ...styles.container,
  }
  const transition = {
    delay,
    duration,
    ...transitionProp,
  }

  const onClick = () => {
    if (readOnly) return

    setValue((prev) => (prev === "from" ? "to" : "from"))
  }

  useSafeLayoutEffect(() => {
    const fromElement = fromRef.current
    const toElement = toRef.current

    if (!fromElement || !toElement) return

    const fromWidth = fromElement.offsetWidth
    const fromHeight = fromElement.offsetHeight
    const toWidth = toElement.offsetWidth
    const toHeight = toElement.offsetHeight

    if (fromWidth !== toWidth || fromHeight !== toHeight) {
      console.warn(
        `Dimensions do not match:
        "from" element (Width: ${fromWidth}px, Height: ${fromHeight}px)
        does not match "to" element (Width: ${toWidth}px, Height: ${toHeight}px).
        Please ensure both elements have the same dimensions.`,
      )
    }

    setDimensions({ height: fromHeight, width: fromWidth })
  }, [fromRef, toRef])

  return (
    <motion.button
      type="button"
      className={cx("ui-flip", `ui-flip__${orientation}`, className)}
      data-disabled={dataAttr(disabled)}
      data-readonly={dataAttr(readOnly)}
      data-value={value}
      disabled={disabled}
      onClick={onClick}
      __css={css}
      {...rest}
    >
      <motion.span
        ref={fromRef}
        className={cx(
          "ui-flip__from",
          `ui-flip__from--${orientation}`,
          className,
        )}
        custom={{ ident: "from", orientation, visible }}
        {...flipProps}
        transition={transition}
        __css={{
          ...styles.flipIdent,
          ...styles.from,
        }}
      >
        {from}
      </motion.span>

      <motion.span
        ref={toRef}
        className={cx("ui-flip__to", `ui-flip__to--${orientation}`, className)}
        custom={{ ident: "to", orientation, visible }}
        {...flipProps}
        transition={transition}
        __css={{
          ...styles.flipIdent,
          ...styles.to,
        }}
      >
        {to}
      </motion.span>
    </motion.button>
  )
}

Flip.__ui__ = "Flip"
