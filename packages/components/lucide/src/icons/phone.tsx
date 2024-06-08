import { forwardRef } from "@yamada-ui/core"
import { Phone as PhoneIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PhoneProps = LucideIconProps

/**
 * `Phone` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Phone = forwardRef<PhoneProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PhoneIcon} {...props} />
))
