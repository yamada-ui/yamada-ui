"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AlignVerticalDistributeCenter as OriginalAlignVerticalDistributeCenterIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AlignVerticalDistributeCenterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AlignVerticalDistributeCenterIcon = component(Icon)({
  as: OriginalAlignVerticalDistributeCenterIcon,
}) as Component<"svg", IconProps>
