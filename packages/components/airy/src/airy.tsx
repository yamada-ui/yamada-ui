import type { CSSUIObject, ThemeProps } from "@yamada-ui/core"
import { omitThemeProps, useComponentStyle } from "@yamada-ui/core"
import type {
  MotionProps,
  MotionTransition,
  WithTransitionProps,
} from "@yamada-ui/motion"
import { motion, motionForwardRef, useMotionAnimation } from "@yamada-ui/motion"
import { cx } from "@yamada-ui/utils"
import { useState, type ReactElement } from "react"

type AiryOptions = {
  from: ReactElement
  to: ReactElement
  transition?: MotionTransition
}

export type AiryProps = WithTransitionProps<MotionProps> &
  ThemeProps<"Airy"> &
  AiryOptions

/**
 * `Airy` is component.
 *
 * @see Docs https://yamada-ui.com/components/transitions/airy
 */
export const Airy = motionForwardRef<AiryProps, "div">((props, ref) => {
  const [currentElement, setCurrentElement] = useState<"from" | "to">("from")
  const [styles, mergedProps] = useComponentStyle("Airy", props)
  const {
    from,
    to,
    transition = {
      duration: 0.1,
      ease: "easeIn",
    },
    className,
    ...rest
  } = omitThemeProps(mergedProps)
  const controls = useMotionAnimation()

  const css: CSSUIObject = {
    ...styles,
  }

  const onClick = async () => {
    await controls.start({ opacity: 0 })
    setCurrentElement((prev) => (prev === "from" ? "to" : "from"))
    await controls.start({ opacity: 1 })
  }

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      className={cx(`ui-airy__${currentElement}`, className)}
      __css={css}
      animate={controls}
      initial={{ opacity: 1 }}
      transition={transition}
      {...rest}
    >
      {currentElement === "from" ? from : to}
    </motion.div>
  )
})
