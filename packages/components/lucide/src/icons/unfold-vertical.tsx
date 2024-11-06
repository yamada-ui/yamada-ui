import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { UnfoldVertical as LucideUnfoldVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UnfoldVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UnfoldVerticalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideUnfoldVerticalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `UnfoldVerticalIcon` instead.
 */
export const UnfoldVertical = UnfoldVerticalIcon
