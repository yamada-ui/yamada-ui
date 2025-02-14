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
   * If `true`, the component is disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * The animation duration.
   *
   * @default 0.2
   */
  duration?: number
  /**
   * If `true`, the component is readonly.
   *
   * @default false
   */
  readOnly?: boolean
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
export const Airy: FC<AiryProps> = (props) => {
  const [styles, mergedProps] = useComponentStyle("Airy", props)
  const {
    className,
    defaultValue = "from",
    delay = 0,
    disabled,
    duration = 0.2,
    from,
    readOnly,
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
  const [value, setValue] = useControllableState<AiryIdent>({
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

    await animate.start({ opacity: 0, transition: { delay, duration } })

    setValue((prev) => (prev === "from" ? "to" : "from"))

    await animate.start({ opacity, transition: { duration } })
  }, [animate, setValue, readOnly, opacity, duration, delay])

  return (
    <motion.button
      type="button"
      className={cx("ui-airy", `ui-airy--${value}`, className)}
      data-disabled={dataAttr(disabled)}
      data-readonly={dataAttr(readOnly)}
      data-value={value}
      animate={animate}
      disabled={disabled}
      initial={{ opacity }}
      onClick={onClick}
      __css={css}
      {...rest}
    >
      {value === "from" ? from : to}
    </motion.button>
  )
}

Airy.__ui__ = "Airy"
