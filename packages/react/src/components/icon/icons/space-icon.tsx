"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Space as OriginalSpaceIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SpaceIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SpaceIcon = component(Icon)({
  as: OriginalSpaceIcon,
}) as Component<"svg", IconProps>
