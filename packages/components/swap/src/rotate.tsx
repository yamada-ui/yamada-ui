import type { ThemeProps } from "@yamada-ui/core"
import { omitThemeProps, useComponentStyle } from "@yamada-ui/core"
import type {
  MotionProps,
  MotionTransition,
  WithTransitionProps,
} from "@yamada-ui/motion"
import { motion, motionForwardRef, useMotionAnimation } from "@yamada-ui/motion"
import { cx } from "@yamada-ui/utils"
import { useState } from "react"
import type { SwapElements } from "./swap"

type RotateOptions = {
  motionTransition?: MotionTransition
}

type RotateProps = WithTransitionProps<MotionProps> &
  ThemeProps<"Rotate"> &
  SwapElements &
  RotateOptions

export const Rotate = motionForwardRef<RotateProps, "div">((props, ref) => {
  const [style, mergedProps] = useComponentStyle("Rotate", props)
  const [currentElement, setCurrentElement] = useState<"from" | "to">("from")
  const controls = useMotionAnimation()

  const {
    from,
    to,
    rotate,
    motionTransition = {
      duration: 0.3,
    },
    className,
    ...rest
  } = omitThemeProps(mergedProps)

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
      transition={motionTransition}
      __css={style}
      {...rest}
    >
      {currentElement === "from" ? from : to}
    </motion.div>
  )
})
