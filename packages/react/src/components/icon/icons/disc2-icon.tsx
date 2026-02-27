"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Disc2 as OriginalDisc2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Disc2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Disc2Icon = component(Icon)({
  as: OriginalDisc2Icon,
}) as Component<"svg", IconProps>
