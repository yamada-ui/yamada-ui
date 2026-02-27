"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Grid2x2Plus as OriginalGrid2x2PlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Grid2x2PlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Grid2x2PlusIcon = component(Icon)({
  as: OriginalGrid2x2PlusIcon,
}) as Component<"svg", IconProps>
