"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Grid2x2 as OriginalGrid2x2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Grid2x2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Grid2x2Icon = component(Icon)({
  as: OriginalGrid2x2Icon,
}) as Component<"svg", IconProps>
