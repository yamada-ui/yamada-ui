import { forwardRef } from "@yamada-ui/core"
import { Table2 as Table2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Table2Props = LucideIconProps

/**
 * `Table2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Table2 = forwardRef<Table2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Table2Icon} {...props} />
))
