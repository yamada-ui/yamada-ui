"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Grid2x2X as OriginalGrid2x2XIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Grid2x2XIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Grid2x2XIcon = component(Icon)({
  as: OriginalGrid2x2XIcon,
}) as Component<"svg", IconProps>
