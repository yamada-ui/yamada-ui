"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Spade as OriginalSpadeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SpadeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SpadeIcon = component(Icon)({
  as: OriginalSpadeIcon,
}) as Component<"svg", IconProps>
