"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AlignVerticalDistributeStart as OriginalAlignVerticalDistributeStartIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AlignVerticalDistributeStartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AlignVerticalDistributeStartIcon = component(Icon)({
  as: OriginalAlignVerticalDistributeStartIcon,
}) as Component<"svg", IconProps>
