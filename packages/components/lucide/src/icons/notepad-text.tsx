import { forwardRef } from "@yamada-ui/core"
import { NotepadText as NotepadTextIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type NotepadTextProps = LucideIconProps

/**
 * `NotepadText` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NotepadText = forwardRef<NotepadTextProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={NotepadTextIcon} {...props} />
))
