import type { ThemeProps } from "@yamada-ui/core"
import { omitThemeProps, useComponentStyle } from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import { motion, motionForwardRef, useMotionAnimation } from "@yamada-ui/motion"
import type { Merge } from "@yamada-ui/utils"
import { cx } from "@yamada-ui/utils"
import { useState, type ReactElement } from "react"

type CurrentElement = "from" | "to"

type AiryOptions = {
  from: ReactElement
  to: ReactElement
  initialElement?: CurrentElement
  duration?: number
}

export type AiryProps = Merge<MotionProps, AiryOptions> & ThemeProps<"Airy">

/**
 * `Airy` component provides an airy animation that alternates between two elements every time one of them is clicked.
 *
 * @see Docs https://yamada-ui.com/components/transitions/airy
 */
export const Airy = motionForwardRef<AiryProps, "div">((props, ref) => {
  const [style, mergedProps] = useComponentStyle("Airy", props)
  const {
    from,
    to,
    duration = 0.1,
    initialElement = "from",
    className,
    ...rest
  } = omitThemeProps(mergedProps)
  const [currentElement, setCurrentElement] =
    useState<CurrentElement>(initialElement)

  const controls = useMotionAnimation()

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
      __css={style}
      animate={controls}
      initial={{ opacity: 1 }}
      transition={{
        duration,
      }}
      {...rest}
    >
      {currentElement === "from" ? from : to}
    </motion.div>
  )
})
