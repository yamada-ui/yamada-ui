import { forwardRef } from "@yamada-ui/core"
import { PhoneOutgoing as PhoneOutgoingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PhoneOutgoingProps = LucideIconProps

/**
 * `PhoneOutgoing` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PhoneOutgoing = forwardRef<PhoneOutgoingProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PhoneOutgoingIcon} {...props} />,
)
