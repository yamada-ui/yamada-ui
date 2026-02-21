"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Rotate3d as OriginalRotate3dIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Rotate3dIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Rotate3dIcon = component(Icon)({
  as: OriginalRotate3dIcon,
}) as Component<"svg", IconProps>
