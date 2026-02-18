"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AlignHorizontalSpaceAround as OriginalAlignHorizontalSpaceAroundIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AlignHorizontalSpaceAroundIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AlignHorizontalSpaceAroundIcon = component(Icon)({
  as: OriginalAlignHorizontalSpaceAroundIcon,
}) as Component<"svg", IconProps>
