import { forwardRef } from "@yamada-ui/core"
import { NotepadTextDashed as NotepadTextDashedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type NotepadTextDashedProps = LucideIconProps

/**
 * `NotepadTextDashed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NotepadTextDashed = forwardRef<NotepadTextDashedProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={NotepadTextDashedIcon} {...props} />
  ),
)
