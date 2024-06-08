import { forwardRef } from "@yamada-ui/core"
import { Warehouse as WarehouseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type WarehouseProps = LucideIconProps

/**
 * `Warehouse` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Warehouse = forwardRef<WarehouseProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={WarehouseIcon} {...props} />
))
