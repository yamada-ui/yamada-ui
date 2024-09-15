import type { ThemeProps } from "@yamada-ui/core"
import { omitThemeProps, useComponentStyle } from "@yamada-ui/core"
import type { MotionProps, MotionTransition } from "@yamada-ui/motion"
import { motion, motionForwardRef, useMotionAnimation } from "@yamada-ui/motion"
import { cx } from "@yamada-ui/utils"
import { useState } from "react"
import type { SwapElements } from "./swap"

type AiryOptions = {
  motionTransition?: MotionTransition
}

type AiryProps = MotionProps & ThemeProps<"Airy"> & SwapElements & AiryOptions

export const Airy = motionForwardRef<AiryProps, "div">((props, ref) => {
  const [style, mergedProps] = useComponentStyle("Airy", props)
  const [currentElement, setCurrentElement] = useState<"from" | "to">("from")
  const controls = useMotionAnimation()

  const {
    from,
    to,
    className,
    motionTransition = {
      duration: 0.1,
      ease: "easeIn",
    },
    ...rest
  } = omitThemeProps(mergedProps)

  const onClick = async () => {
    await controls.start({ opacity: 0 })
    setCurrentElement(currentElement === "from" ? "to" : "from")
    await controls.start({ opacity: 1 })
  }

  return (
    <motion.div
      ref={ref}
      className={cx(`ui-swap__airy-${currentElement}`, className)}
      onClick={onClick}
      animate={controls}
      initial={{ opacity: 1 }}
      transition={motionTransition}
      __css={style}
      {...rest}
    >
      {currentElement === "from" ? from : to}
    </motion.div>
  )
})
