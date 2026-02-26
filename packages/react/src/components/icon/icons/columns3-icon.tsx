"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Columns3 as OriginalColumns3Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Columns3Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Columns3Icon = component(Icon)({
  as: OriginalColumns3Icon,
}) as Component<"svg", IconProps>
