import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ShieldOff as LucideShieldOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ShieldOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldOffIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideShieldOffIcon} {...props} />,
)

/**
 * @deprecated Use `ShieldOffIcon` instead.
 */
export const ShieldOff = ShieldOffIcon
