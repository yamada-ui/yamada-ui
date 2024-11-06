import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { IndentDecrease as LucideIndentDecreaseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `IndentDecreaseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IndentDecreaseIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideIndentDecreaseIcon} {...props} />
  ),
)

/**
 * @deprecated Use `IndentDecreaseIcon` instead.
 */
export const IndentDecrease = IndentDecreaseIcon
