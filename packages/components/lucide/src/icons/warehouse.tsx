import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Warehouse as LucideWarehouseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `WarehouseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WarehouseIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideWarehouseIcon} {...props} />,
)

/**
 * @deprecated Use `WarehouseIcon` instead.
 */
export const Warehouse = WarehouseIcon
