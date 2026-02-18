"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PencilOff as OriginalPencilOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PencilOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PencilOffIcon = component(Icon)({
  as: OriginalPencilOffIcon,
}) as Component<"svg", IconProps>
