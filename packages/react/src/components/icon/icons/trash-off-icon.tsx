"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TrashOff as OriginalTrashOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TrashOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TrashOffIcon = component(Icon)({
  as: OriginalTrashOffIcon,
}) as Component<"svg", IconProps>
