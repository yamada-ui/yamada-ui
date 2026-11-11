"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LineDotBottomVertical as OriginalLineDotBottomVerticalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LineDotBottomVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LineDotBottomVerticalIcon = component(Icon)({
  as: OriginalLineDotBottomVerticalIcon,
}) as Component<"svg", IconProps>
