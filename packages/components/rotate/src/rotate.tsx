import type { CSSUIObject, ThemeProps } from "@yamada-ui/core"
import { omitThemeProps, useComponentStyle } from "@yamada-ui/core"
import type { MotionProps, MotionTransition } from "@yamada-ui/motion"
import { motion, motionForwardRef, useMotionAnimation } from "@yamada-ui/motion"
import type { Merge } from "@yamada-ui/utils"
import { cx } from "@yamada-ui/utils"
import { useState, type ReactElement } from "react"

type RotateOptions = {
  from: ReactElement
  to: ReactElement
  rotate?: number
  transition?: MotionTransition
}

export type RotateProps = Merge<MotionProps, RotateOptions> &
  ThemeProps<"Rotate">

/**
 * `Rotate` is component.
 *
 * @see Docs https://yamada-ui.com/components/transitions/rotate
 */
export const Rotate = motionForwardRef<RotateProps, "div">((props, ref) => {
  const [currentElement, setCurrentElement] = useState<"from" | "to">("from")
  const [styles, mergedProps] = useComponentStyle("Rotate", props)
  const {
    from,
    to,
    transition = {
      duration: 0.3,
    },
    rotate = 45,
    className,
    ...rest
  } = omitThemeProps(mergedProps)
  const controls = useMotionAnimation()

  const css: CSSUIObject = {
    ...styles,
  }

  const onClick = async () => {
    await controls.start({
      opacity: 0,
      rotate: `${rotate}deg`,
    })
    setCurrentElement((prev) => (prev === "from" ? "to" : "from"))
    await controls.start({ opacity: 1, rotate: "0deg" })
  }

  return (
    <motion.div
      ref={ref}
      custom={rotate}
      className={cx(`ui-rotate__${currentElement}`, className)}
      onClick={onClick}
      animate={controls}
      initial={{ opacity: 1, rotate: "0deg" }}
      transition={transition}
      __css={css}
      {...rest}
    >
      {currentElement === "from" ? from : to}
    </motion.div>
  )
})
