import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ToggleRight as LucideToggleRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ToggleRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ToggleRightIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideToggleRightIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ToggleRightIcon` instead.
 */
export const ToggleRight = ToggleRightIcon
