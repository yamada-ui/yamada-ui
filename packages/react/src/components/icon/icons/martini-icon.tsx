"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Martini as OriginalMartiniIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MartiniIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MartiniIcon = component(Icon)({
  as: OriginalMartiniIcon,
}) as Component<"svg", IconProps>
