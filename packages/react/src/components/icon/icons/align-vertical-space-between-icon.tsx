"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AlignVerticalSpaceBetween as OriginalAlignVerticalSpaceBetweenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AlignVerticalSpaceBetweenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AlignVerticalSpaceBetweenIcon = component(Icon)({
  as: OriginalAlignVerticalSpaceBetweenIcon,
}) as Component<"svg", IconProps>
