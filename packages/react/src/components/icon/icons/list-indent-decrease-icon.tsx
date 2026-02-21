"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ListIndentDecrease as OriginalListIndentDecreaseIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ListIndentDecreaseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ListIndentDecreaseIcon = component(Icon)({
  as: OriginalListIndentDecreaseIcon,
}) as Component<"svg", IconProps>
