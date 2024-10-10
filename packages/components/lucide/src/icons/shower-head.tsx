import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ShowerHead as ShowerHeadIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ShowerHead` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShowerHead = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ShowerHeadIcon} {...props} />
))
