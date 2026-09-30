"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Broom as OriginalBroomIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BroomIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BroomIcon = component(Icon)({
  as: OriginalBroomIcon,
}) as Component<"svg", IconProps>
