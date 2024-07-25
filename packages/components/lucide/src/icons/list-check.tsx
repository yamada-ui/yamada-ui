import { forwardRef } from "@yamada-ui/core"
import { ListCheck as ListCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ListCheckProps = LucideIconProps

/**
 * `ListCheck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListCheck = forwardRef<ListCheckProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ListCheckIcon} {...props} />
))
