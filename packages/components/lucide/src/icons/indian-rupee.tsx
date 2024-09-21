import { forwardRef } from "@yamada-ui/core"
import { IndianRupee as IndianRupeeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `IndianRupee` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const IndianRupee = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={IndianRupeeIcon} {...props} />
))
