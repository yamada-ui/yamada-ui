"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Droplets as OriginalDropletsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DropletsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DropletsIcon = component(Icon)({
  as: OriginalDropletsIcon,
}) as Component<"svg", IconProps>
