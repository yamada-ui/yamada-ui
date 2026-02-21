"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Baseline as OriginalBaselineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BaselineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BaselineIcon = component(Icon)({
  as: OriginalBaselineIcon,
}) as Component<"svg", IconProps>
