import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { IceCreamBowl as IceCreamBowlIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `IceCreamBowl` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IceCreamBowl = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={IceCreamBowlIcon} {...props} />
))
