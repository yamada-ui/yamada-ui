import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { VenetianMask as LucideVenetianMaskIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `VenetianMaskIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VenetianMaskIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideVenetianMaskIcon} {...props} />
  ),
)

/**
 * @deprecated Use `VenetianMaskIcon` instead.
 */
export const VenetianMask = VenetianMaskIcon
