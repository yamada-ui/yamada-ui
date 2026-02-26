"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ListTree as OriginalListTreeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ListTreeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ListTreeIcon = component(Icon)({
  as: OriginalListTreeIcon,
}) as Component<"svg", IconProps>
