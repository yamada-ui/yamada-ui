"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FishSymbol as OriginalFishSymbolIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FishSymbolIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FishSymbolIcon = component(Icon)({
  as: OriginalFishSymbolIcon,
}) as Component<"svg", IconProps>
