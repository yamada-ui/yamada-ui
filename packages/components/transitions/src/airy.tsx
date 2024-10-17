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

export type AiryIdent = "from" | "to"

interface AiryOptions {
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
  defaultValue?: AiryIdent
  /**
   *　The animation delay.
   *
   * @default 0
   */
  delay?: number
  /**
   * The animation duration.
   *
   * @default 0.2
   */
  duration?: number
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
  /**
   * Use this when you want to control the animation from outside the component.
   */
  value?: AiryIdent
  /**
   * This is a callback function that is called when the animation state changes.
   */
  onChange?: (value: AiryIdent) => void
}

export interface AiryProps
  extends Merge<MotionProps<"button">, AiryOptions>,
    ThemeProps<"Airy"> {}

/**
 * `Airy` is a component that creates an airy animation, switching between two elements when one is clicked.
 *
 * @see Docs https://yamada-ui.com/components/transitions/airy
 */
export const Airy = motionForwardRef<AiryProps, "button">((props, ref) => {
  const [styles, mergedProps] = useComponentStyle("Airy", props)
  const {
    className,
    defaultValue = "from",
    delay = 0,
    duration = 0.2,
    from,
    isDisabled,
    isReadOnly,
    to,
    value: valueProp,
    onChange: onChangeProp,
    ...rest
  } = omitThemeProps(mergedProps)
  const [vars, { opacity }] = useCreateVars(
    { opacity: 1, ...styles, ...rest },
    { transform: true },
    ["opacity"],
  )

  const animate = useMotionAnimation()

  const [value, setValue] = useControllableState<AiryIdent>({
    defaultValue,
    value: valueProp,
    onChange: onChangeProp,
  })

  const isFrom = value === "from"

  const onClick = useCallback(async () => {
    if (isReadOnly) return

    await animate.start({ opacity: 0, transition: { delay, duration } })

    setValue((prev) => (prev === "from" ? "to" : "from"))

    await animate.start({ opacity, transition: { duration } })
  }, [animate, setValue, isReadOnly, opacity, duration, delay])

  const css: CSSUIObject = {
    vars,
    ...styles,
  }

  return (
    <motion.button
      ref={ref}
      type="button"
      className={cx("ui-airy", `ui-airy--${value}`, className)}
      data-disabled={dataAttr(isDisabled)}
      data-readonly={dataAttr(isReadOnly)}
      data-value={value}
      animate={animate}
      disabled={isDisabled}
      initial={{ opacity }}
      onClick={onClick}
      __css={css}
      {...rest}
    >
      {isFrom ? from : to}
    </motion.button>
  )
})

Airy.displayName = "Airy"
Airy.__ui__ = "Airy"
