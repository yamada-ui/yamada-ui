import type { ThemeProps } from "@yamada-ui/core"
import { omitThemeProps, useComponentStyle } from "@yamada-ui/core"
import type { MotionProps, MotionTransitionProps } from "@yamada-ui/motion"
import { motion, motionForwardRef, useMotionAnimation } from "@yamada-ui/motion"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import type { Merge } from "@yamada-ui/utils"
import { cx } from "@yamada-ui/utils"
import { type ReactElement } from "react"

export type AiryIdent = "from" | "to"

interface AiryOptions {
  from: ReactElement
  to: ReactElement
  value?: AiryIdent
  defaultValue?: AiryIdent
  onChange?: () => void
  duration?: MotionTransitionProps["duration"]
}

export type AiryProps = Merge<MotionProps, AiryOptions> & ThemeProps<"Airy">

/**
 * `Airy` is a component that creates an airy animation, switching between two elements when one is clicked
 *
 * @see Docs https://yamada-ui.com/components/transitions/airy
 */
export const Airy = motionForwardRef<AiryProps, "div">((props, ref) => {
  const [style, mergedProps] = useComponentStyle("Airy", props)
  const {
    from,
    to,
    value: valueProp,
    defaultValue = "from",
    onChange: onChangeProp,
    duration = 0.1,
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

  const onClick = async () => {
    await animate.start({ opacity: 0 })
    setValue((prev) => (prev === "from" ? "to" : "from"))
    await animate.start({ opacity: 1 })
  }

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      className={cx("ui-airy", `ui-airy--${value}`, className)}
      __css={style}
      animate={animate}
      initial={{ opacity: 1 }}
      transition={{
        duration,
      }}
      {...rest}
    >
      {isFrom ? from : to}
    </motion.div>
  )
})
