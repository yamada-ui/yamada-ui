"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { EllipsisVertical as OriginalEllipsisVerticalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EllipsisVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EllipsisVerticalIcon = component(Icon)({
  as: OriginalEllipsisVerticalIcon,
}) as Component<"svg", IconProps>
