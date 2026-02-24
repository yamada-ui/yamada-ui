"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TypeOutline as OriginalTypeOutlineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TypeOutlineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TypeOutlineIcon = component(Icon)({
  as: OriginalTypeOutlineIcon,
}) as Component<"svg", IconProps>
