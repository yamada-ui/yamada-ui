import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Type as LucideTypeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TypeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TypeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTypeIcon} {...props} />
))

/**
 * @deprecated Use `TypeIcon` instead.
 */
export const Type = TypeIcon
