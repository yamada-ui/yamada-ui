"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Rows3 as OriginalRows3Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Rows3Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Rows3Icon = component(Icon)({
  as: OriginalRows3Icon,
}) as Component<"svg", IconProps>
