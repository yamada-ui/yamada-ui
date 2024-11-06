import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ContactRound as LucideContactRoundIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ContactRoundIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ContactRoundIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideContactRoundIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ContactRoundIcon` instead.
 */
export const ContactRound = ContactRoundIcon
