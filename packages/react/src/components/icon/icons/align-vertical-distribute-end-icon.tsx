"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AlignVerticalDistributeEnd as OriginalAlignVerticalDistributeEndIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AlignVerticalDistributeEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AlignVerticalDistributeEndIcon = component(Icon)({
  as: OriginalAlignVerticalDistributeEndIcon,
}) as Component<"svg", IconProps>
