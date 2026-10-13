"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LineDotLeftHorizontal as OriginalLineDotLeftHorizontalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LineDotLeftHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LineDotLeftHorizontalIcon = component(Icon)({
  as: OriginalLineDotLeftHorizontalIcon,
}) as Component<"svg", IconProps>
