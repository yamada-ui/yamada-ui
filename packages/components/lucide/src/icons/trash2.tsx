import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Trash2 as Trash2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Trash2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Trash2 = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Trash2Icon} {...props} />
))
