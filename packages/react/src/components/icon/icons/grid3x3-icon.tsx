"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Grid3x3 as OriginalGrid3x3Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Grid3x3Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Grid3x3Icon = component(Icon)({
  as: OriginalGrid3x3Icon,
}) as Component<"svg", IconProps>
