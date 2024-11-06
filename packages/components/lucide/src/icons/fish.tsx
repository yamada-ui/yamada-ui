import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Fish as LucideFishIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FishIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FishIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFishIcon} {...props} />
))

/**
 * @deprecated Use `FishIcon` instead.
 */
export const Fish = FishIcon
