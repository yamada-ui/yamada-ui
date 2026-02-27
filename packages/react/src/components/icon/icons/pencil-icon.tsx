"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Pencil as OriginalPencilIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PencilIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PencilIcon = component(Icon)({
  as: OriginalPencilIcon,
}) as Component<"svg", IconProps>
