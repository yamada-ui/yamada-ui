import { forwardRef } from "@yamada-ui/core"
import { PhoneForwarded as PhoneForwardedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PhoneForwardedProps = LucideIconProps

/**
 * `PhoneForwarded` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PhoneForwarded = forwardRef<PhoneForwardedProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={PhoneForwardedIcon} {...props} />,
)
