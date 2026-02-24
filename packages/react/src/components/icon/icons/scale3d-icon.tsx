"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Scale3d as OriginalScale3dIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Scale3dIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Scale3dIcon = component(Icon)({
  as: OriginalScale3dIcon,
}) as Component<"svg", IconProps>
