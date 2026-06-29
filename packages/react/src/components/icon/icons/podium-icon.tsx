"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Podium as OriginalPodiumIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PodiumIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PodiumIcon = component(Icon)({
  as: OriginalPodiumIcon,
}) as Component<"svg", IconProps>
