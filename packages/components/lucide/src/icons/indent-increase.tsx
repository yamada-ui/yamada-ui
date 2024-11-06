import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { IndentIncrease as LucideIndentIncreaseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `IndentIncreaseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IndentIncreaseIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideIndentIncreaseIcon} {...props} />
  ),
)

/**
 * @deprecated Use `IndentIncreaseIcon` instead.
 */
export const IndentIncrease = IndentIncreaseIcon
