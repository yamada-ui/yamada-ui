"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Ghost as OriginalGhostIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GhostIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GhostIcon = component(Icon)({
  as: OriginalGhostIcon,
}) as Component<"svg", IconProps>
