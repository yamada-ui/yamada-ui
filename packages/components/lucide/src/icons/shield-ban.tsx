import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ShieldBan as LucideShieldBanIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ShieldBanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldBanIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideShieldBanIcon} {...props} />,
)

/**
 * @deprecated Use `ShieldBanIcon` instead.
 */
export const ShieldBan = ShieldBanIcon
