"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ListMinus as OriginalListMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ListMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ListMinusIcon = component(Icon)({
  as: OriginalListMinusIcon,
}) as Component<"svg", IconProps>
