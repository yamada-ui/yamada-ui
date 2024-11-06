import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Paperclip as LucidePaperclipIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PaperclipIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PaperclipIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucidePaperclipIcon} {...props} />,
)

/**
 * @deprecated Use `PaperclipIcon` instead.
 */
export const Paperclip = PaperclipIcon
