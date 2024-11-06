import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Trash2 as LucideTrash2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Trash2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Trash2Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTrash2Icon} {...props} />
))

/**
 * @deprecated Use `Trash2Icon` instead.
 */
export const Trash2 = Trash2Icon
