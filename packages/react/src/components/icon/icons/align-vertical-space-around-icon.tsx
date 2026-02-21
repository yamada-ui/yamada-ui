"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AlignVerticalSpaceAround as OriginalAlignVerticalSpaceAroundIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AlignVerticalSpaceAroundIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AlignVerticalSpaceAroundIcon = component(Icon)({
  as: OriginalAlignVerticalSpaceAroundIcon,
}) as Component<"svg", IconProps>
