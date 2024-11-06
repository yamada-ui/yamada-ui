import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { NotepadText as LucideNotepadTextIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `NotepadTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NotepadTextIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideNotepadTextIcon} {...props} />
  ),
)

/**
 * @deprecated Use `NotepadTextIcon` instead.
 */
export const NotepadText = NotepadTextIcon
