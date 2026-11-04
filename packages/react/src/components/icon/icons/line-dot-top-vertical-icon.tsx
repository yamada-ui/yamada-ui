"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LineDotTopVertical as OriginalLineDotTopVerticalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LineDotTopVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LineDotTopVerticalIcon = component(Icon)({
  as: OriginalLineDotTopVerticalIcon,
}) as Component<"svg", IconProps>
