import { forwardRef } from "@yamada-ui/core"
import { Trash as TrashIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TrashProps = LucideIconProps

/**
 * `Trash` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Trash = forwardRef<TrashProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TrashIcon} {...props} />
))
