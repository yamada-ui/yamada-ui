import type { CSSUIObject, ThemeProps } from "@yamada-ui/core"
import { omitThemeProps, useComponentStyle } from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import { motion, motionForwardRef, useMotionAnimation } from "@yamada-ui/motion"
import type { Merge } from "@yamada-ui/utils"
import { cx } from "@yamada-ui/utils"
import { useState, type ReactElement } from "react"

const css: CSSUIObject = {
  userSelect: "none",
  cursor: "pointer",
}

type RotateOptions = {
  from: ReactElement
  to: ReactElement
  rotate?: number
  duration?: number
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
    duration = 0.3,
    rotate = 45,
    className,
    ...rest
  } = omitThemeProps(mergedProps)
  const controls = useMotionAnimation()

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
      transition={{
        duration,
      }}
      __css={{
        ...css,
        ...styles,
      }}
      {...rest}
    >
      {currentElement === "from" ? from : to}
    </motion.div>
  )
})
