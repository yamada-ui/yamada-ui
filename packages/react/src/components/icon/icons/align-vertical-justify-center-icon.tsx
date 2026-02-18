"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AlignVerticalJustifyCenter as OriginalAlignVerticalJustifyCenterIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AlignVerticalJustifyCenterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AlignVerticalJustifyCenterIcon = component(Icon)({
  as: OriginalAlignVerticalJustifyCenterIcon,
}) as Component<"svg", IconProps>
