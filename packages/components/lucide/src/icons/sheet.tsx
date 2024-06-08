import { forwardRef } from "@yamada-ui/core"
import { Sheet as SheetIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SheetProps = LucideIconProps

/**
 * `Sheet` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Sheet = forwardRef<SheetProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SheetIcon} {...props} />
))
