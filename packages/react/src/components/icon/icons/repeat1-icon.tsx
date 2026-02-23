"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Repeat1 as OriginalRepeat1Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Repeat1Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Repeat1Icon = component(Icon)({
  as: OriginalRepeat1Icon,
}) as Component<"svg", IconProps>
