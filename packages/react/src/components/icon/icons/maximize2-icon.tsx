"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Maximize2 as OriginalMaximize2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Maximize2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Maximize2Icon = component(Icon)({
  as: OriginalMaximize2Icon,
}) as Component<"svg", IconProps>
