import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Info as LucideInfoIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `InfoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const InfoIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideInfoIcon} {...props} />
))

/**
 * @deprecated Use `InfoIcon` instead.
 */
export const Info = InfoIcon
