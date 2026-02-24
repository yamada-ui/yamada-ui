"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AlignHorizontalJustifyStart as OriginalAlignHorizontalJustifyStartIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AlignHorizontalJustifyStartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AlignHorizontalJustifyStartIcon = component(Icon)({
  as: OriginalAlignHorizontalJustifyStartIcon,
}) as Component<"svg", IconProps>
