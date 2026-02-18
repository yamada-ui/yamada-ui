"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Squircle as OriginalSquircleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquircleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquircleIcon = component(Icon)({
  as: OriginalSquircleIcon,
}) as Component<"svg", IconProps>
