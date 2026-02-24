"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Tally3 as OriginalTally3Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Tally3Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Tally3Icon = component(Icon)({
  as: OriginalTally3Icon,
}) as Component<"svg", IconProps>
