import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Ban as LucideBanIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BanIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBanIcon} {...props} />
))

/**
 * @deprecated Use `BanIcon` instead.
 */
export const Ban = BanIcon
