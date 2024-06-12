import { forwardRef } from "@yamada-ui/core"
import { PhoneIncoming as PhoneIncomingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PhoneIncomingProps = LucideIconProps

/**
 * `PhoneIncoming` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PhoneIncoming = forwardRef<PhoneIncomingProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PhoneIncomingIcon} {...props} />,
)
