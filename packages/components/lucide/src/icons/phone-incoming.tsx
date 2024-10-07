import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PhoneIncoming as PhoneIncomingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PhoneIncoming` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PhoneIncoming = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PhoneIncomingIcon} {...props} />,
)
