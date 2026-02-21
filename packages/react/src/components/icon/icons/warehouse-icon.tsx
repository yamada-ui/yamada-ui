"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Warehouse as OriginalWarehouseIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WarehouseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WarehouseIcon = component(Icon)({
  as: OriginalWarehouseIcon,
}) as Component<"svg", IconProps>
