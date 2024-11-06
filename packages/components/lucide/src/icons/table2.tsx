import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Table2 as LucideTable2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Table2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Table2Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTable2Icon} {...props} />
))

/**
 * @deprecated Use `Table2Icon` instead.
 */
export const Table2 = Table2Icon
