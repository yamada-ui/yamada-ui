"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RotateCw as OriginalRotateCwIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RotateCwIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RotateCwIcon = component(Icon)({
  as: OriginalRotateCwIcon,
}) as Component<"svg", IconProps>
