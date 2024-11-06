import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Baby as LucideBabyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BabyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BabyIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBabyIcon} {...props} />
))

/**
 * @deprecated Use `BabyIcon` instead.
 */
export const Baby = BabyIcon
