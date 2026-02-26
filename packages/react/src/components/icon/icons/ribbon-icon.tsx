"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Ribbon as OriginalRibbonIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RibbonIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RibbonIcon = component(Icon)({
  as: OriginalRibbonIcon,
}) as Component<"svg", IconProps>
