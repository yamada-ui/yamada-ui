"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GripVertical as OriginalGripVerticalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GripVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GripVerticalIcon = component(Icon)({
  as: OriginalGripVerticalIcon,
}) as Component<"svg", IconProps>
