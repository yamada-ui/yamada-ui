import type { ThemeProps } from "@yamada-ui/core"
import { omitThemeProps, useComponentStyle } from "@yamada-ui/core"
import type { MotionProps, WithTransitionProps } from "@yamada-ui/motion"
import { motion, motionForwardRef, useMotionAnimation } from "@yamada-ui/motion"
import { cx } from "@yamada-ui/utils"
import { useState } from "react"
import type { SwapElements } from "./swap"

type RotateProps = WithTransitionProps<MotionProps> &
  ThemeProps<"Rotate"> &
  SwapElements

export const Rotate = motionForwardRef<RotateProps, "div">((props, ref) => {
  const [style, mergedProps] = useComponentStyle("Rotate", props)
  const [currentElement, setCurrentElement] = useState<"from" | "to">("from")
  const controls = useMotionAnimation()

  let { rotate, duration, className, ...rest } = omitThemeProps(mergedProps)

  const { from, to } = mergedProps

  const onClick = async () => {
    await controls.start({
      opacity: 0,
      //TODO: デフォルトはどうするか　（360度, 45度, 90度）
      rotate: typeof rotate === "string" ? rotate : "360deg",
    })
    setCurrentElement(currentElement === "from" ? "to" : "from")
    await controls.start({ opacity: 1, rotate: "0deg" })
  }

  return (
    <motion.div
      ref={ref}
      custom={rotate}
      className={cx(`ui-swap__rotate-${currentElement}`, className)}
      onClick={onClick}
      animate={controls}
      initial={{ opacity: 1, rotate: "0deg" }}
      transition={{
        duration: duration ? duration : 0.3,
      }}
      __css={style}
      {...rest}
    >
      {currentElement === "from" ? from : to}
    </motion.div>
  )
})
