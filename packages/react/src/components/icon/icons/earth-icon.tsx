"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Earth as OriginalEarthIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EarthIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EarthIcon = component(Icon)({
  as: OriginalEarthIcon,
}) as Component<"svg", IconProps>
