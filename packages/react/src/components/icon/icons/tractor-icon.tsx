"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Tractor as OriginalTractorIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TractorIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TractorIcon = component(Icon)({
  as: OriginalTractorIcon,
}) as Component<"svg", IconProps>
