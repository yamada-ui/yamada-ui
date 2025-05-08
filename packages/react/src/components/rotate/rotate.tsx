import type { ReactNode } from "react"
import type { KeyframeIdent, ThemeProps } from "../../core"
import type { HTMLMotionProps } from "../motion"
import type { RotateStyle } from "./rotate.style"
import { useAnimation } from "motion/react"
import { useCallback } from "react"
import { createComponent, insertVars, useVarName } from "../../core"
import { useControllableState } from "../../hooks/use-controllable-state"
import { dataAttr, handlerAll } from "../../utils"
import { motion } from "../motion"
import { rotateStyle } from "./rotate.style"

export interface RotateProps
  extends Omit<HTMLMotionProps<"button">, "onChange" | "rotate">,
    ThemeProps<RotateStyle> {
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
  value?: KeyframeIdent
  /**
   * This is a callback function that is called when the animation state changes.
   */
  onChange?: (value: KeyframeIdent) => void
}

export const {
  PropsContext: RotatePropsContext,
  usePropsContext: useRotatePropsContext,
  withContext,
} = createComponent<RotateProps, RotateStyle>("rotate", rotateStyle)

/**
 * `Rotate` is an animation component that alternately rotates two elements as they switch.
 *
 * @see https://yamada-ui.com/components/rotate
 */
export const Rotate = withContext<"button", RotateProps>(
  ({
    defaultValue = "from",
    delay = 0,
    disabled,
    duration = 0.4,
    from,
    readOnly,
    rotate = 45,
    to,
    value: valueProp,
    onChange,
    onClick: onClickProp,
    ...rest
  }) => {
    const opacity = useVarName("opacity")
    const animate = useAnimation()
    const [value, setValue] = useControllableState<KeyframeIdent>({
      defaultValue,
      value: valueProp,
      onChange,
    })

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
        data-disabled={dataAttr(disabled)}
        data-readonly={dataAttr(readOnly)}
        data-value={value}
        animate={animate}
        custom={{ rotate }}
        disabled={disabled}
        initial={{ opacity, rotate: "0deg" }}
        onClick={handlerAll(onClickProp, onClick)}
        {...rest}
      >
        {value === "from" ? from : to}
      </motion.button>
    )
  },
)(undefined, ({ css, ...rest }) => {
  css = insertVars(css, [
    {
      name: "opacity",
      property: "opacity",
    },
  ])

  rest = insertVars(rest, [
    {
      name: "opacity",
      property: "opacity",
    },
  ])

  return {
    ...rest,
    css,
    opacity: "{opacity}",
  }
})
