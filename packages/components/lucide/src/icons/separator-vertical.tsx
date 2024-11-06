import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SeparatorVertical as LucideSeparatorVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SeparatorVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SeparatorVerticalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSeparatorVerticalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SeparatorVerticalIcon` instead.
 */
export const SeparatorVertical = SeparatorVerticalIcon
