import { forwardRef } from "@yamada-ui/core"
import { PhoneMissed as PhoneMissedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PhoneMissedProps = LucideIconProps

/**
 * `PhoneMissed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PhoneMissed = forwardRef<PhoneMissedProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PhoneMissedIcon} {...props} />
))
