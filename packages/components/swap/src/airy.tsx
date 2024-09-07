import type { ThemeProps } from "@yamada-ui/core"
import { omitThemeProps, useComponentStyle } from "@yamada-ui/core"
import type { MotionProps, WithTransitionProps } from "@yamada-ui/motion"
import { motion, motionForwardRef, useMotionAnimation } from "@yamada-ui/motion"
import { cx } from "@yamada-ui/utils"
import { useState } from "react"
import type { SwapElements } from "./swap"

type AiryProps = WithTransitionProps<MotionProps> &
  ThemeProps<"Airy"> &
  SwapElements

export const Airy = motionForwardRef<AiryProps, "div">((props, ref) => {
  const [style, mergedProps] = useComponentStyle("Airy", props)
  const [currentElement, setCurrentElement] = useState<"from" | "to">("from")
  const controls = useMotionAnimation()

  let { duration, className, ...rest } = omitThemeProps(mergedProps)

  const { from, to } = mergedProps

  const onClick = async () => {
    await controls.start({ opacity: 0 })
    setCurrentElement(currentElement === "from" ? "to" : "from")
    await controls.start({ opacity: 1 })
  }

  return (
    <motion.div
      ref={ref}
      className={cx(`ui-airy__${currentElement}`, className)}
      onClick={onClick}
      animate={controls}
      initial={{ opacity: 1 }}
      transition={{
        duration: duration ? duration : 0.1,
        ease: "easeIn",
      }}
      __css={style}
      {...rest}
    >
      {currentElement === "from" ? from : to}
    </motion.div>
  )
})
