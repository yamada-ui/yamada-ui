"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Music3 as OriginalMusic3Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Music3Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Music3Icon = component(Icon)({
  as: OriginalMusic3Icon,
}) as Component<"svg", IconProps>
