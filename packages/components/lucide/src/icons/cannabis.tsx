import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Cannabis as LucideCannabisIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CannabisIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CannabisIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCannabisIcon} {...props} />
))

/**
 * @deprecated Use `CannabisIcon` instead.
 */
export const Cannabis = CannabisIcon
