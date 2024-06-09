import { forwardRef } from "@yamada-ui/core"
import { PhoneCall as PhoneCallIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PhoneCallProps = LucideIconProps

/**
 * `PhoneCall` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PhoneCall = forwardRef<PhoneCallProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PhoneCallIcon} {...props} />
))
