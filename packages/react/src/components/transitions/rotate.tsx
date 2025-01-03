import type { ReactElement } from "react"
import type { CSSUIObject, FC, ThemeProps } from "../../core"
import type { Merge } from "../../utils"
import type { MotionProps } from "../motion"
import { useAnimation } from "motion/react"
import { useCallback } from "react"
import { omitThemeProps, useComponentStyle, useCreateVars } from "../../core"
import { useControllableState } from "../../hooks/use-controllable-state"
import { cx, dataAttr } from "../../utils"
import { motion } from "../motion"

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
export const Rotate: FC<RotateProps> = (props) => {
  const [styles, mergedProps] = useComponentStyle("Rotate", props)
  const {
    className,
    defaultValue = "from",
    delay = 0,
    disabled,
    duration = 0.4,
    from,
    readOnly,
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
  const animate = useAnimation()
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
}

Rotate.__ui__ = "Rotate"
