import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Trophy as LucideTrophyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TrophyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TrophyIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTrophyIcon} {...props} />
))

/**
 * @deprecated Use `TrophyIcon` instead.
 */
export const Trophy = TrophyIcon
