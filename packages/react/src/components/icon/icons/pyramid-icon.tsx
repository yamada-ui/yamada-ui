"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Pyramid as OriginalPyramidIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PyramidIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PyramidIcon = component(Icon)({
  as: OriginalPyramidIcon,
}) as Component<"svg", IconProps>
