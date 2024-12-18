import type { CSSUIObject, ThemeProps } from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import type { Merge } from "@yamada-ui/utils"
import type { ReactElement } from "react"
import {
  omitThemeProps,
  useComponentStyle,
  useCreateVars,
} from "@yamada-ui/core"
import { motion, motionForwardRef, useMotionAnimation } from "@yamada-ui/motion"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { cx, dataAttr } from "@yamada-ui/utils"
import { useCallback } from "react"

export type RotateIdent = "from" | "to"

interface RotateOptions {
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
  defaultValue?: RotateIdent
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
   * If `true`, the component is disabled.
   *
   * @default false
   * @deprecated Use `disabled` instead.
   */
  isDisabled?: boolean
  /**
   * If `true`, the component is readonly.
   *
   * @default false
   * @deprecated Use `readOnly` instead.
   */
  isReadOnly?: boolean
  /**
   * If `true`, the component is readonly.
   *
   * @default false
   */
  readOnly?: boolean
  /**
   * The animation rotation.
   *
   * @default 45
   */
  rotate?: number
  /**
   * Use this when you want to control the animation from outside the component.
   */
  value?: RotateIdent
  /**
   * This is a callback function that is called when the animation state changes.
   */
  onChange?: (value: RotateIdent) => void
}

export interface RotateProps
  extends Merge<MotionProps<"button">, RotateOptions>,
    ThemeProps<"Rotate"> {}

/**
 * `Rotate` is an animation component that alternately rotates two elements as they switch.
 *
 * @see Docs https://yamada-ui.com/components/transitions/rotate
 */
export const Rotate = motionForwardRef<RotateProps, "button">((props, ref) => {
  const [styles, mergedProps] = useComponentStyle("Rotate", props)
  const {
    className,
    defaultValue = "from",
    delay = 0,
    isDisabled,
    disabled = isDisabled,
    duration = 0.4,
    from,
    isReadOnly,
    readOnly = isReadOnly,
    rotate = 45,
    to,
    value: valueProp,
    onChange: onChangeProp,
    ...rest
  } = omitThemeProps(mergedProps)
  const [vars, { opacity }] = useCreateVars(
    { opacity: 1, ...styles, ...rest },
    ["opacity"],
    { transform: true },
  )
  const animate = useMotionAnimation()
  const [value, setValue] = useControllableState<RotateIdent>({
    defaultValue,
    value: valueProp,
    onChange: onChangeProp,
  })
  const css: CSSUIObject = {
    vars,
    ...styles,
  }

  const onClick = useCallback(async () => {
    if (readOnly) return

    await animate.start({
      opacity: 0,
      rotate: `${rotate}deg`,
      transition: { delay, duration },
    })

    setValue((prev) => (prev === "from" ? "to" : "from"))

    await animate.start({
      opacity: opacity,
      rotate: "0deg",
      transition: { duration },
    })
  }, [readOnly, animate, rotate, duration, delay, setValue, opacity])

  return (
    <motion.button
      ref={ref}
      type="button"
      className={cx("ui-rotate", `ui-rotate--${value}`, className)}
      data-disabled={dataAttr(disabled)}
      data-readonly={dataAttr(readOnly)}
      data-value={value}
      animate={animate}
      custom={rotate}
      disabled={disabled}
      initial={{ opacity, rotate: "0deg" }}
      onClick={onClick}
      __css={css}
      {...rest}
    >
      {value === "from" ? from : to}
    </motion.button>
  )
})

Rotate.displayName = "Rotate"
Rotate.__ui__ = "Rotate"
