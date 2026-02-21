"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AlignHorizontalSpaceBetween as OriginalAlignHorizontalSpaceBetweenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AlignHorizontalSpaceBetweenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AlignHorizontalSpaceBetweenIcon = component(Icon)({
  as: OriginalAlignHorizontalSpaceBetweenIcon,
}) as Component<"svg", IconProps>
