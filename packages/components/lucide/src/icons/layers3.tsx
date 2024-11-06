import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Layers3 as LucideLayers3Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Layers3Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Layers3Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideLayers3Icon} {...props} />
))

/**
 * @deprecated Use `Layers3Icon` instead.
 */
export const Layers3 = Layers3Icon
