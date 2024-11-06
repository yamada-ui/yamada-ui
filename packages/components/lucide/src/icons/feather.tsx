import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Feather as LucideFeatherIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FeatherIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FeatherIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFeatherIcon} {...props} />
))

/**
 * @deprecated Use `FeatherIcon` instead.
 */
export const Feather = FeatherIcon
