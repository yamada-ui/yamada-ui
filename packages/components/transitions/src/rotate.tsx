import type { ThemeProps } from "@yamada-ui/core"
import { omitThemeProps, useComponentStyle } from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import { motion, motionForwardRef, useMotionAnimation } from "@yamada-ui/motion"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import type { Merge } from "@yamada-ui/utils"
import { cx, dataAttr } from "@yamada-ui/utils"
import { useCallback, type ReactElement } from "react"

export type RotateIdent = "from" | "to"

interface RotateOptions {
  /**
   * Passing React elements to "from" and "to" is required.
   */
  from: ReactElement
  to: ReactElement
  /**
   * Use this when you want to control the animation from outside the component.
   */
  value?: RotateIdent
  onChange?: () => void
  /**
   * You can set the initial state.
   *
   * @default 'from'
   */
  defaultValue?: RotateIdent
  /**
   * The animation rotation.
   *
   * @default 45
   */
  rotate?: number
  /**
   * The animation duration.
   *
   * @default 0.3
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

export interface RotateProps
  extends Merge<MotionProps<"button">, RotateOptions>,
    ThemeProps<"Rotate"> {}

/**
 * `Rotate` is an animation component that alternately rotates two elements as they switch.
 *
 * @see Docs https://yamada-ui.com/components/transitions/rotate
 */
export const Rotate = motionForwardRef<RotateProps, "button">((props, ref) => {
  const [style, mergedProps] = useComponentStyle("Rotate", props)
  const {
    from,
    to,
    value: valueProp,
    defaultValue = "from",
    onChange: onChangeProp,
    duration = 0.3,
    delay = 0,
    rotate = 45,
    isDisabled = false,
    isReadOnly = false,
    className,
    ...rest
  } = omitThemeProps(mergedProps)

  const animate = useMotionAnimation()

  const [value, setValue] = useControllableState<RotateIdent>({
    value: valueProp,
    defaultValue,
    onChange: onChangeProp,
  })

  const isFrom = value === "from"

  const onClick = useCallback(async () => {
    if (isReadOnly) return

    await animate.start({
      opacity: 0,
      rotate: `${rotate}deg`,
    })
    setValue((prev) => (prev === "from" ? "to" : "from"))
    await animate.start({ opacity: 1, rotate: "0deg" })
  }, [animate, rotate, setValue, isReadOnly])

  return (
    <motion.button
      type="button"
      ref={ref}
      disabled={isDisabled}
      data-value={value}
      data-disabled={dataAttr(isDisabled)}
      data-readonly={dataAttr(isReadOnly)}
      custom={rotate}
      className={cx("ui-rotate", `ui-rotate--${value}`, className)}
      onClick={onClick}
      animate={animate}
      initial={{ opacity: 1, rotate: "0deg" }}
      transition={{
        duration,
        delay,
      }}
      __css={style}
      {...rest}
    >
      {isFrom ? from : to}
    </motion.button>
  )
})
