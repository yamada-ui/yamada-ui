"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Tally4 as OriginalTally4Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Tally4Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Tally4Icon = component(Icon)({
  as: OriginalTally4Icon,
}) as Component<"svg", IconProps>
