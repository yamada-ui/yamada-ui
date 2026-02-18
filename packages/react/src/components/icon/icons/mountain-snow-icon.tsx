"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MountainSnow as OriginalMountainSnowIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MountainSnowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MountainSnowIcon = component(Icon)({
  as: OriginalMountainSnowIcon,
}) as Component<"svg", IconProps>
