import type { ThemeProps } from "@yamada-ui/core"
import { omitThemeProps, useComponentStyle } from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import { motion, motionForwardRef, useMotionAnimation } from "@yamada-ui/motion"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import type { Merge } from "@yamada-ui/utils"
import { cx, dataAttr } from "@yamada-ui/utils"
import { useCallback, type ReactElement } from "react"

export type AiryIdent = "from" | "to"

interface AiryOptions {
  /**
   * Passing React elements to "from" and "to" is required.
   */
  from: ReactElement
  to: ReactElement
  /**
   * Use this when you want to control the animation from outside the component.
   */
  value?: AiryIdent
  onChange?: () => void
  /**
   * You can set the initial state.
   *
   * @default 'from'
   */
  defaultValue?: AiryIdent
  /**
   * The animation duration.
   *
   * @default 0.1
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

export interface AiryProps
  extends Merge<MotionProps<"button">, AiryOptions>,
    ThemeProps<"Airy"> {}

/**
 * `Airy` is a component that creates an airy animation, switching between two elements when one is clicked
 *
 * @see Docs https://yamada-ui.com/components/transitions/airy
 */
export const Airy = motionForwardRef<AiryProps, "button">((props, ref) => {
  const [style, mergedProps] = useComponentStyle("Airy", props)
  const {
    from,
    to,
    value: valueProp,
    defaultValue = "from",
    onChange: onChangeProp,
    duration = 0.1,
    delay = 0,
    isDisabled = false,
    isReadOnly = false,
    className,
    ...rest
  } = omitThemeProps(mergedProps)

  const animate = useMotionAnimation()

  const [value, setValue] = useControllableState<AiryIdent>({
    value: valueProp,
    defaultValue,
    onChange: onChangeProp,
  })

  const isFrom = value === "from"

  const onClick = useCallback(async () => {
    if (isReadOnly) return

    await animate.start({ opacity: 0 })

    setValue((prev) => (prev === "from" ? "to" : "from"))

    await animate.start({ opacity: 1 })
  }, [animate, setValue, isReadOnly])

  return (
    <motion.button
      type="button"
      ref={ref}
      disabled={isDisabled}
      data-value={value}
      data-disabled={dataAttr(isDisabled)}
      data-readonly={dataAttr(isReadOnly)}
      onClick={onClick}
      className={cx("ui-airy", `ui-airy--${value}`, className)}
      __css={style}
      animate={animate}
      initial={{ opacity: 1 }}
      transition={{
        duration,
        delay,
      }}
      {...rest}
    >
      {isFrom ? from : to}
    </motion.button>
  )
})

Airy.displayName = "Airy"
Airy.__ui__ = "Airy"
