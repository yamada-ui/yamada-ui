"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ListEnd as OriginalListEndIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ListEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ListEndIcon = component(Icon)({
  as: OriginalListEndIcon,
}) as Component<"svg", IconProps>
