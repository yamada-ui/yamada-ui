import { forwardRef } from "@yamada-ui/core"
import { ListRestart as ListRestartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ListRestartProps = LucideIconProps

/**
 * `ListRestart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ListRestart = forwardRef<ListRestartProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ListRestartIcon} {...props} />
))
