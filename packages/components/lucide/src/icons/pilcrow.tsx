import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Pilcrow as LucidePilcrowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PilcrowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PilcrowIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePilcrowIcon} {...props} />
))

/**
 * @deprecated Use `PilcrowIcon` instead.
 */
export const Pilcrow = PilcrowIcon
