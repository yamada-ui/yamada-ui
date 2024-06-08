import { forwardRef } from "@yamada-ui/core"
import { Tablets as TabletsIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TabletsProps = LucideIconProps

/**
 * `Tablets` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Tablets = forwardRef<TabletsProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TabletsIcon} {...props} />
))
