"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Rows4 as OriginalRows4Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Rows4Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Rows4Icon = component(Icon)({
  as: OriginalRows4Icon,
}) as Component<"svg", IconProps>
