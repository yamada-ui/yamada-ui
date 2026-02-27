"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Minimize2 as OriginalMinimize2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Minimize2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Minimize2Icon = component(Icon)({
  as: OriginalMinimize2Icon,
}) as Component<"svg", IconProps>
