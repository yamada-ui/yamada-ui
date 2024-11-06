import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { HandHelping as LucideHandHelpingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HandHelpingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HandHelpingIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideHandHelpingIcon} {...props} />
  ),
)

/**
 * @deprecated Use `HandHelpingIcon` instead.
 */
export const HandHelping = HandHelpingIcon
