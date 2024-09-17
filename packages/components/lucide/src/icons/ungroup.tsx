import { forwardRef } from "@yamada-ui/core"
import { Ungroup as UngroupIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `Ungroup` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Ungroup = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={UngroupIcon} {...props} />
))
