import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { NotepadTextDashed as OriginalNotepadTextDashed } from "lucide-react"

/**
 * `NotepadTextDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NotepadTextDashedIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalNotepadTextDashed} {...props} />,
)

/**
 * `NotepadTextDashed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `NotepadTextDashedIcon` instead.
 */
export const NotepadTextDashed = NotepadTextDashedIcon
