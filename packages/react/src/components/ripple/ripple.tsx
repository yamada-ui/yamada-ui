import type { Key } from "react"
import type { FC, ThemeProps } from "../../core"
import type { MotionProps } from "../motion"
import type { RippleStyle } from "./ripple.style"
import type { RippleOptions } from "./use-ripple"
import { AnimatePresence } from "motion/react"
import { createComponent } from "../../core"
import { handlerAll } from "../../utils"
import { motion } from "../motion"
import { rippleStyle } from "./ripple.style"

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

export interface RippleProps
  extends MotionProps<"span">,
    ThemeProps<RippleStyle> {
  ripples: RippleOptions[]
  onClear: (key: Key) => void
  /**
   * If `true`, disable ripple effects when pressing a element.
   *
   * @default false
   */
  disabled?: boolean
}

export const {
  PropsContext: RipplePropsContext,
  usePropsContext: useRipplePropsContext,
  withContext,
} = createComponent<RippleProps, RippleStyle>("ripple", rippleStyle)

/**
 * `Ripple` is a component that adds a ripple effect to elements, allowing users to recognize when they have clicked.
 *
 * @see Docs https://yamada-ui.com/components/ripple
 */
export const Ripple: FC<RippleProps> = withContext(
  ({
    style,
    color = "currentColor",
    disabled,
    ripples,
    onAnimationComplete,
    onClear,
    ...rest
  }) => {
    if (disabled) return null

    return (
      <>
        {ripples.map(({ key, size, x, y }) => {
          const duration = clamp(0.01 * size, 0.2, size > 100 ? 0.75 : 0.5)

          return (
            <AnimatePresence key={key} mode="popLayout">
              <motion.span
                style={{
                  height: `${size}px`,
                  left: x,
                  pointerEvents: "none",
                  position: "absolute",
                  top: y,
                  transformOrigin: "center",
                  width: `${size}px`,
                  ...style,
                }}
                animate={{ opacity: 0, transform: "scale(2)" }}
                bgColor={color}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0.35, transform: "scale(0)" }}
                transition={{ duration }}
                {...rest}
                onAnimationComplete={handlerAll(onAnimationComplete, () =>
                  onClear(key),
                )}
              />
            </AnimatePresence>
          )
        })}
      </>
    )
  },
)()
