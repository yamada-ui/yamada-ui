import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FishOff as LucideFishOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FishOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FishOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFishOffIcon} {...props} />
))

/**
 * @deprecated Use `FishOffIcon` instead.
 */
export const FishOff = FishOffIcon
