import { forwardRef } from "@yamada-ui/core"
import { Delete as DeleteIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DeleteProps = LucideIconProps

/**
 * `Delete` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Delete = forwardRef<DeleteProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DeleteIcon} {...props} />
))
