"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RailSymbol as OriginalRailSymbolIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RailSymbolIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RailSymbolIcon = component(Icon)({
  as: OriginalRailSymbolIcon,
}) as Component<"svg", IconProps>
