"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ServerNas as OriginalServerNasIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ServerNasIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ServerNasIcon = component(Icon)({
  as: OriginalServerNasIcon,
}) as Component<"svg", IconProps>
