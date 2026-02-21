"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AlignHorizontalDistributeCenter as OriginalAlignHorizontalDistributeCenterIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AlignHorizontalDistributeCenterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AlignHorizontalDistributeCenterIcon = component(Icon)({
  as: OriginalAlignHorizontalDistributeCenterIcon,
}) as Component<"svg", IconProps>
