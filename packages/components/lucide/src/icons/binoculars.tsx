import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Binoculars as BinocularsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Binoculars` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Binoculars = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BinocularsIcon} {...props} />
))
