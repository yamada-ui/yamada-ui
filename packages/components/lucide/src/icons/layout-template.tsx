import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { LayoutTemplate as LucideLayoutTemplateIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LayoutTemplateIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LayoutTemplateIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideLayoutTemplateIcon} {...props} />
  ),
)

/**
 * @deprecated Use `LayoutTemplateIcon` instead.
 */
export const LayoutTemplate = LayoutTemplateIcon
