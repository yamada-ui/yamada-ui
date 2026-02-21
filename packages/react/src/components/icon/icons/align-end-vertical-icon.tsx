"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AlignEndVertical as OriginalAlignEndVerticalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AlignEndVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AlignEndVerticalIcon = component(Icon)({
  as: OriginalAlignEndVerticalIcon,
}) as Component<"svg", IconProps>
