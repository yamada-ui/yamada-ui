import { forwardRef } from "@yamada-ui/core"
import { Trash2 as Trash2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Trash2Props = LucideIconProps

/**
 * `Trash2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Trash2 = forwardRef<Trash2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Trash2Icon} {...props} />
))
