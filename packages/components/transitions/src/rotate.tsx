import type { ThemeProps } from "@yamada-ui/core"
import { omitThemeProps, useComponentStyle } from "@yamada-ui/core"
import type { MotionProps, MotionTransitionProps } from "@yamada-ui/motion"
import { motion, motionForwardRef, useMotionAnimation } from "@yamada-ui/motion"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import type { Merge } from "@yamada-ui/utils"
import { cx } from "@yamada-ui/utils"
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
  rotate?: number
  duration?: MotionTransitionProps["duration"]
}

export type RotateProps = Merge<MotionProps<"button">, RotateOptions> &
  ThemeProps<"Rotate">

/**
 * `Rotate` is an animation component that alternately rotates two elements as they switch.
 *
 * @see Docs https://yamada-ui.com/components/transitions/rotate
 */
export const Rotate = motionForwardRef<RotateProps, "div">((props, ref) => {
  const [style, mergedProps] = useComponentStyle("Rotate", props)
  const {
    from,
    to,
    value: valueProp,
    defaultValue = "from",
    onChange: onChangeProp,
    duration = 0.3,
    rotate = 45,
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
    await animate.start({
      opacity: 0,
      rotate: `${rotate}deg`,
    })
    setValue((prev) => (prev === "from" ? "to" : "from"))
    await animate.start({ opacity: 1, rotate: "0deg" })
  }, [animate, rotate, setValue])

  return (
    <motion.button
      type="button"
      ref={ref}
      custom={rotate}
      className={cx("ui-rotate", `ui-rotate--${value}`, className)}
      onClick={onClick}
      animate={animate}
      initial={{ opacity: 1, rotate: "0deg" }}
      transition={{
        duration,
      }}
      __css={style}
      {...rest}
    >
      {isFrom ? from : to}
    </motion.button>
  )
})
