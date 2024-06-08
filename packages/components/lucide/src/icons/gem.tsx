import { forwardRef } from "@yamada-ui/core"
import { Gem as GemIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GemProps = LucideIconProps

/**
 * `Gem` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Gem = forwardRef<GemProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={GemIcon} {...props} />
))
