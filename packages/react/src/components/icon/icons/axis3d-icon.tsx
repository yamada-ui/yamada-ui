"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Axis3d as OriginalAxis3dIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Axis3dIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Axis3dIcon = component(Icon)({
  as: OriginalAxis3dIcon,
}) as Component<"svg", IconProps>
