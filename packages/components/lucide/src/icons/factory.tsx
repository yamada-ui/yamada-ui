import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Factory as LucideFactoryIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FactoryIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FactoryIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFactoryIcon} {...props} />
))

/**
 * @deprecated Use `FactoryIcon` instead.
 */
export const Factory = FactoryIcon
