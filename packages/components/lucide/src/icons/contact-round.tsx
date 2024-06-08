import { forwardRef } from "@yamada-ui/core"
import { ContactRound as ContactRoundIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ContactRoundProps = LucideIconProps

/**
 * `ContactRound` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ContactRound = forwardRef<ContactRoundProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ContactRoundIcon} {...props} />,
)
