"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Music4 as OriginalMusic4Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Music4Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Music4Icon = component(Icon)({
  as: OriginalMusic4Icon,
}) as Component<"svg", IconProps>
