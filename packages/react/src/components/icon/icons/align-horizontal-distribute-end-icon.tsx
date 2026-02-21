"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AlignHorizontalDistributeEnd as OriginalAlignHorizontalDistributeEndIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AlignHorizontalDistributeEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AlignHorizontalDistributeEndIcon = component(Icon)({
  as: OriginalAlignHorizontalDistributeEndIcon,
}) as Component<"svg", IconProps>
