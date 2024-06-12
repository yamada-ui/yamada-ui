import { forwardRef } from "@yamada-ui/core"
import { PhoneOff as PhoneOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PhoneOffProps = LucideIconProps

/**
 * `PhoneOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PhoneOff = forwardRef<PhoneOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PhoneOffIcon} {...props} />
))
