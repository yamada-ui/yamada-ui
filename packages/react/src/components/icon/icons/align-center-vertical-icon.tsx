"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AlignCenterVertical as OriginalAlignCenterVerticalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AlignCenterVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AlignCenterVerticalIcon = component(Icon)({
  as: OriginalAlignCenterVerticalIcon,
}) as Component<"svg", IconProps>
