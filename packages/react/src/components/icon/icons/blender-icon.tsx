"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Blender as OriginalBlenderIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BlenderIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BlenderIcon = component(Icon)({
  as: OriginalBlenderIcon,
}) as Component<"svg", IconProps>
