import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ShieldPlus as LucideShieldPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ShieldPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldPlusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideShieldPlusIcon} {...props} />,
)

/**
 * @deprecated Use `ShieldPlusIcon` instead.
 */
export const ShieldPlus = ShieldPlusIcon
