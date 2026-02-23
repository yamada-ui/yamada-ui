"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AlignHorizontalDistributeStart as OriginalAlignHorizontalDistributeStartIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AlignHorizontalDistributeStartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AlignHorizontalDistributeStartIcon = component(Icon)({
  as: OriginalAlignHorizontalDistributeStartIcon,
}) as Component<"svg", IconProps>
