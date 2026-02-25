"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AlignHorizontalJustifyCenter as OriginalAlignHorizontalJustifyCenterIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AlignHorizontalJustifyCenterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AlignHorizontalJustifyCenterIcon = component(Icon)({
  as: OriginalAlignHorizontalJustifyCenterIcon,
}) as Component<"svg", IconProps>
