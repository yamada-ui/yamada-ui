"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Tally5 as OriginalTally5Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Tally5Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Tally5Icon = component(Icon)({
  as: OriginalTally5Icon,
}) as Component<"svg", IconProps>
