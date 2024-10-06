import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Cannabis as CannabisIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Cannabis` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Cannabis = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CannabisIcon} {...props} />
))
