import { forwardRef } from "@yamada-ui/core"
import { TableProperties as TablePropertiesIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TablePropertiesProps = LucideIconProps

/**
 * `TableProperties` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TableProperties = forwardRef<TablePropertiesProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={TablePropertiesIcon} {...props} />,
)
