"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LineDotRightHorizontal as OriginalLineDotRightHorizontalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LineDotRightHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LineDotRightHorizontalIcon = component(Icon)({
  as: OriginalLineDotRightHorizontalIcon,
}) as Component<"svg", IconProps>
