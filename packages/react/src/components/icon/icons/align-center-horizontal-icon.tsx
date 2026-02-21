"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AlignCenterHorizontal as OriginalAlignCenterHorizontalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AlignCenterHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AlignCenterHorizontalIcon = component(Icon)({
  as: OriginalAlignCenterHorizontalIcon,
}) as Component<"svg", IconProps>
