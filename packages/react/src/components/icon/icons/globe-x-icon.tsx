"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GlobeX as OriginalGlobeXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GlobeXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GlobeXIcon = component(Icon)({
  as: OriginalGlobeXIcon,
}) as Component<"svg", IconProps>
