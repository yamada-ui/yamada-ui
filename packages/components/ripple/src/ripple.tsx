import type { CSSUIObject, FC } from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import type { Key } from "react"
import type { RippleOptions } from "./use-ripple"
import { AnimatePresence, motion } from "@yamada-ui/motion"
import { cx, handlerAll } from "@yamada-ui/utils"

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

export interface RippleProps extends MotionProps<"span"> {
  ripples: RippleOptions[]
  onClear: (key: Key) => void
  /**
   * If `true`, disable ripple effects when pressing a element.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * If `true`, disable ripple effects when pressing a element.
   *
   * @default false
   *
   * @deprecated Use `disabled` instead.
   */
  isDisabled?: boolean
}

/**
 * `Ripple` is a component that adds a ripple effect to elements, allowing users to recognize when they have clicked.
 *
 * @see Docs https://yamada-ui.com/components/other/ripple
 */
export const Ripple: FC<RippleProps> = ({
  className,
  style,
  color = "currentColor",
  isDisabled,
  disabled = isDisabled,
  ripples,
  onAnimationComplete,
  onClear,
  ...rest
}) => {
  if (disabled) return null

  const css: CSSUIObject = {
    rounded: "fallback(full, 9999px)",
    zIndex: "fallback(kurillin, 9)",
  }

  return (
    <>
      {ripples.map(({ key, size, x, y }) => {
        const duration = clamp(0.01 * size, 0.2, size > 100 ? 0.75 : 0.5)

        return (
          <AnimatePresence key={key} mode="popLayout">
            <motion.span
              className={cx("ui-ripple", className)}
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
              __css={css}
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
}

Ripple.displayName = "Ripple"
Ripple.__ui__ = "Ripple"
