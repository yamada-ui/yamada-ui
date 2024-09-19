import type { ThemeProps } from "@yamada-ui/core"
import { omitThemeProps, useComponentStyle } from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import { motion, motionForwardRef, useMotionAnimation } from "@yamada-ui/motion"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import type { Merge } from "@yamada-ui/utils"
import { cx } from "@yamada-ui/utils"
import { type ReactElement } from "react"

export type AiryIdent = "from" | "to"

interface AiryOptions {
  from: ReactElement
  to: ReactElement
  initialElement?: AiryIdent
  onChange?: () => void
  duration?: number
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
    initialElement = "from",
    onChange: onChangeProp,
    duration = 0.1,
    className,
    ...rest
  } = omitThemeProps(mergedProps)

  const [currentElement, setCurrentElement] = useControllableState<AiryIdent>({
    defaultValue: initialElement,
    onChange: onChangeProp,
  })

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
