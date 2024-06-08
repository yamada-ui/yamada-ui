import { forwardRef } from "@yamada-ui/core"
import { Subscript as SubscriptIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SubscriptProps = LucideIconProps

/**
 * `Subscript` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Subscript = forwardRef<SubscriptProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SubscriptIcon} {...props} />
))
