"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SunDim as OriginalSunDimIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SunDimIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SunDimIcon = component(Icon)({
  as: OriginalSunDimIcon,
}) as Component<"svg", IconProps>
