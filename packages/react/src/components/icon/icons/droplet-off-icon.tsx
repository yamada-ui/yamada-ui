"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { DropletOff as OriginalDropletOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DropletOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DropletOffIcon = component(Icon)({
  as: OriginalDropletOffIcon,
}) as Component<"svg", IconProps>
