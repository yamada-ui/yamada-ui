"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Disc3 as OriginalDisc3Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Disc3Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Disc3Icon = component(Icon)({
  as: OriginalDisc3Icon,
}) as Component<"svg", IconProps>
