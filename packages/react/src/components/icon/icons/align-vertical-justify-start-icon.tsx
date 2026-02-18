"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AlignVerticalJustifyStart as OriginalAlignVerticalJustifyStartIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AlignVerticalJustifyStartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AlignVerticalJustifyStartIcon = component(Icon)({
  as: OriginalAlignVerticalJustifyStartIcon,
}) as Component<"svg", IconProps>
