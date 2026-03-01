"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Cuboid as OriginalCuboidIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CuboidIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CuboidIcon = component(Icon)({
  as: OriginalCuboidIcon,
}) as Component<"svg", IconProps>
