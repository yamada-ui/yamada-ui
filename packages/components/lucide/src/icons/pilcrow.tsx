import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Pilcrow as PilcrowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Pilcrow` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Pilcrow = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PilcrowIcon} {...props} />
))
