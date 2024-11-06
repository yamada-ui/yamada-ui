import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { RotateCcw as LucideRotateCcwIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RotateCcwIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RotateCcwIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideRotateCcwIcon} {...props} />,
)

/**
 * @deprecated Use `RotateCcwIcon` instead.
 */
export const RotateCcw = RotateCcwIcon
