"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AlignVerticalJustifyEnd as OriginalAlignVerticalJustifyEndIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AlignVerticalJustifyEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AlignVerticalJustifyEndIcon = component(Icon)({
  as: OriginalAlignVerticalJustifyEndIcon,
}) as Component<"svg", IconProps>
