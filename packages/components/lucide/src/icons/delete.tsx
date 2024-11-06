import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Delete as LucideDeleteIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DeleteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DeleteIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideDeleteIcon} {...props} />
))

/**
 * @deprecated Use `DeleteIcon` instead.
 */
export const Delete = DeleteIcon
