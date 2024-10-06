import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BoomBox as BoomBoxIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BoomBox` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BoomBox = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BoomBoxIcon} {...props} />
))
