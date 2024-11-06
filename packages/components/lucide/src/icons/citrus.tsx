import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Citrus as LucideCitrusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CitrusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CitrusIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCitrusIcon} {...props} />
))

/**
 * @deprecated Use `CitrusIcon` instead.
 */
export const Citrus = CitrusIcon
