import type { ThemeProps } from "@yamada-ui/core"
import { omitThemeProps, useComponentStyle } from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import { motion, motionForwardRef, useMotionAnimation } from "@yamada-ui/motion"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import type { Merge } from "@yamada-ui/utils"
import { cx } from "@yamada-ui/utils"
import type { ReactElement } from "react"

export type RotateIdent = "from" | "to"

interface RotateOptions {
  from: ReactElement
  to: ReactElement
  initialElement?: RotateIdent
  onChange?: () => void
  rotate?: number
  duration?: number
}

export type RotateProps = Merge<MotionProps, RotateOptions> &
  ThemeProps<"Rotate">

/**
 * `Rotate` is an animation component that alternately rotates two elements as they switch.
 *
 * @see Docs https://yamada-ui.com/components/transitions/rotate
 */
export const Rotate = motionForwardRef<RotateProps, "div">((props, ref) => {
  const [style, mergedProps] = useComponentStyle("Rotate", props)
  const {
    from,
    to,
    initialElement = "from",
    onChange: onChangeProp,
    duration = 0.3,
    rotate = 45,
    className,
    ...rest
  } = omitThemeProps(mergedProps)

  const [currentElement, setCurrentElement] = useControllableState<RotateIdent>(
    {
      defaultValue: initialElement,
      onChange: onChangeProp,
    },
  )

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
      __css={style}
      {...rest}
    >
      {currentElement === "from" ? from : to}
    </motion.div>
  )
})
