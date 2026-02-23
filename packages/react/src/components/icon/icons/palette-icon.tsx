"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Palette as OriginalPaletteIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PaletteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PaletteIcon = component(Icon)({
  as: OriginalPaletteIcon,
}) as Component<"svg", IconProps>
