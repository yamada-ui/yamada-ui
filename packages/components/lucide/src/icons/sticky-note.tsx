import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { StickyNote as StickyNoteIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `StickyNote` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StickyNote = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={StickyNoteIcon} {...props} />
))
