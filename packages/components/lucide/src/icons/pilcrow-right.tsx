import { forwardRef } from "@yamada-ui/core"
import { PilcrowRight as PilcrowRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `PilcrowRight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PilcrowRight = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PilcrowRightIcon} {...props} />
))
