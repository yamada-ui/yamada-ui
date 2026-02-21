"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ServerOff as OriginalServerOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ServerOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ServerOffIcon = component(Icon)({
  as: OriginalServerOffIcon,
}) as Component<"svg", IconProps>
