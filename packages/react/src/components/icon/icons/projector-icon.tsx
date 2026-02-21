"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Projector as OriginalProjectorIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ProjectorIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ProjectorIcon = component(Icon)({
  as: OriginalProjectorIcon,
}) as Component<"svg", IconProps>
