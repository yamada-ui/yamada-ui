"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Radius as OriginalRadiusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RadiusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RadiusIcon = component(Icon)({
  as: OriginalRadiusIcon,
}) as Component<"svg", IconProps>
