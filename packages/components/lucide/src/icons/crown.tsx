import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Crown as LucideCrownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CrownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CrownIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCrownIcon} {...props} />
))

/**
 * @deprecated Use `CrownIcon` instead.
 */
export const Crown = CrownIcon
