"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Server as OriginalServerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ServerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ServerIcon = component(Icon)({
  as: OriginalServerIcon,
}) as Component<"svg", IconProps>
