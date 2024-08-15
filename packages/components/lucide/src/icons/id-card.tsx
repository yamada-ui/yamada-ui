import { forwardRef } from "@yamada-ui/core"
import { IdCard as IdCardIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type IdCardProps = LucideIconProps

/**
 * `IdCard` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IdCard = forwardRef<IdCardProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={IdCardIcon} {...props} />
))
