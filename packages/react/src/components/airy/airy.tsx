"use client"

import type { ReactNode } from "react"
import type { KeyframeIdent, ThemeProps } from "../../core"
import type { HTMLMotionProps } from "../motion"
import type { AiryStyle } from "./airy.style"
import { useAnimation } from "motion/react"
import { useCallback } from "react"
import {
  createComponent,
  useInjectVarsIntoCss,
  useInjectVarsIntoProps,
} from "../../core"
import { useControllableState } from "../../hooks/use-controllable-state"
import { dataAttr, handlerAll } from "../../utils"
import { motion } from "../motion"
import { airyStyle } from "./airy.style"

export interface AiryProps
  extends Omit<HTMLMotionProps<"button">, "onChange">,
    ThemeProps<AiryStyle> {
  /**
   * Passing React elements to "from" is required.
   */
  from: ReactNode
  /**
   * Passing React elements to "to" is required.
   */
  to: ReactNode
  /**
   * You can set the initial state.
   *
   * @default 'from'
   */
  defaultValue?: KeyframeIdent
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
  value?: KeyframeIdent
  /**
   * This is a callback function that is called when the animation state changes.
   */
  onChange?: (value: KeyframeIdent) => void
}

const {
  PropsContext: AiryPropsContext,
  usePropsContext: useAiryPropsContext,
  withContext,
} = createComponent<AiryProps, AiryStyle>("airy", airyStyle)

export { AiryPropsContext, useAiryPropsContext }

/**
 * `Airy` is a component that creates an airy animation, switching between two elements when one is clicked.
 *
 * @see https://yamada-ui.com/components/airy
 */
export const Airy = withContext(
  ({
    defaultValue = "from",
    delay = 0,
    disabled,
    duration = 0.2,
    from,
    readOnly,
    to,
    value: valueProp,
    onChange,
    onClick: onClickProp,
    ...rest
  }) => {
    const opacity = "var(--opacity)"
    const animate = useAnimation()
    const [value, setValue] = useControllableState<KeyframeIdent>({
      defaultValue,
      value: valueProp,
      onChange,
    })

    const onClick = useCallback(async () => {
      if (readOnly) return

      await animate.start({ opacity: 0, transition: { delay, duration } })

      setValue((prev) => (prev === "from" ? "to" : "from"))

      await animate.start({ opacity, transition: { duration } })
    }, [animate, setValue, readOnly, opacity, duration, delay])

    return (
      <motion.button
        type="button"
        data-disabled={dataAttr(disabled)}
        data-readonly={dataAttr(readOnly)}
        data-value={value}
        animate={animate}
        disabled={disabled}
        initial={{ opacity }}
        onClick={handlerAll(onClickProp, onClick)}
        {...rest}
      >
        {value === "from" ? from : to}
      </motion.button>
    )
  },
)(undefined, (props) => {
  const css = useInjectVarsIntoCss(props.css, { opacity: "opacity" })
  const rest = useInjectVarsIntoProps(props, { opacity: "opacity" })

  return { ...rest, css, opacity: "{opacity}" }
})
