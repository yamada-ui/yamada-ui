import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { StickyNote as LucideStickyNoteIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `StickyNoteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StickyNoteIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideStickyNoteIcon} {...props} />,
)

/**
 * @deprecated Use `StickyNoteIcon` instead.
 */
export const StickyNote = StickyNoteIcon
