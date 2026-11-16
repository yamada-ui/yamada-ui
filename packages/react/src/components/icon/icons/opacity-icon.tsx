"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Opacity as OriginalOpacityIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `OpacityIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const OpacityIcon = component(Icon)({
  as: OriginalOpacityIcon,
}) as Component<"svg", IconProps>
