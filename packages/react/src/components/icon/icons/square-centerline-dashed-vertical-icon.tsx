"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareCenterlineDashedVertical as OriginalSquareCenterlineDashedVerticalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareCenterlineDashedVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareCenterlineDashedVerticalIcon = component(Icon)({
  as: OriginalSquareCenterlineDashedVerticalIcon,
}) as Component<"svg", IconProps>
