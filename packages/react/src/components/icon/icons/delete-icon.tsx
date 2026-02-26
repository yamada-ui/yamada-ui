"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Delete as OriginalDeleteIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DeleteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DeleteIcon = component(Icon)({
  as: OriginalDeleteIcon,
}) as Component<"svg", IconProps>
