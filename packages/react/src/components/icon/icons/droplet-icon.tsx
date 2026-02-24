"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Droplet as OriginalDropletIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DropletIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DropletIcon = component(Icon)({
  as: OriginalDropletIcon,
}) as Component<"svg", IconProps>
