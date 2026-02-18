"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Layers2 as OriginalLayers2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Layers2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Layers2Icon = component(Icon)({
  as: OriginalLayers2Icon,
}) as Component<"svg", IconProps>
