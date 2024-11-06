import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Trash as LucideTrashIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TrashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TrashIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTrashIcon} {...props} />
))

/**
 * @deprecated Use `TrashIcon` instead.
 */
export const Trash = TrashIcon
