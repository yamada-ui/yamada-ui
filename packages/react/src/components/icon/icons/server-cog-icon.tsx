"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ServerCog as OriginalServerCogIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ServerCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ServerCogIcon = component(Icon)({
  as: OriginalServerCogIcon,
}) as Component<"svg", IconProps>
