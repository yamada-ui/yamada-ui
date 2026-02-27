"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AlignHorizontalJustifyEnd as OriginalAlignHorizontalJustifyEndIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AlignHorizontalJustifyEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AlignHorizontalJustifyEndIcon = component(Icon)({
  as: OriginalAlignHorizontalJustifyEndIcon,
}) as Component<"svg", IconProps>
