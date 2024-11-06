import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { IdCard as LucideIdCardIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `IdCardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IdCardIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideIdCardIcon} {...props} />
))

/**
 * @deprecated Use `IdCardIcon` instead.
 */
export const IdCard = IdCardIcon
