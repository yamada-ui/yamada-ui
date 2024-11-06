import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { IceCreamBowl as LucideIceCreamBowlIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `IceCreamBowlIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IceCreamBowlIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideIceCreamBowlIcon} {...props} />
  ),
)

/**
 * @deprecated Use `IceCreamBowlIcon` instead.
 */
export const IceCreamBowl = IceCreamBowlIcon
