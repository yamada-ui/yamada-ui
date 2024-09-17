import { forwardRef } from "@yamada-ui/core"
import { Paintbrush as PaintbrushIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `Paintbrush` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Paintbrush = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PaintbrushIcon} {...props} />
))
