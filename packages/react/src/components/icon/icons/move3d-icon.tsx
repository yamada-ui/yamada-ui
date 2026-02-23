"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Move3d as OriginalMove3dIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Move3dIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Move3dIcon = component(Icon)({
  as: OriginalMove3dIcon,
}) as Component<"svg", IconProps>
