"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Cannabis as OriginalCannabisIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CannabisIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CannabisIcon = component(Icon)({
  as: OriginalCannabisIcon,
}) as Component<"svg", IconProps>
