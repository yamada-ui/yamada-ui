"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MarginVertical as OriginalMarginVerticalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MarginVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MarginVerticalIcon = component(Icon)({
  as: OriginalMarginVerticalIcon,
}) as Component<"svg", IconProps>
