import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Sheet as LucideSheetIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SheetIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SheetIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSheetIcon} {...props} />
))

/**
 * @deprecated Use `SheetIcon` instead.
 */
export const Sheet = SheetIcon
