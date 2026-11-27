"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LayoutGridPlus as OriginalLayoutGridPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LayoutGridPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LayoutGridPlusIcon = component(Icon)({
  as: OriginalLayoutGridPlusIcon,
}) as Component<"svg", IconProps>
