"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Dice5 as OriginalDice5Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Dice5Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Dice5Icon = component(Icon)({
  as: OriginalDice5Icon,
}) as Component<"svg", IconProps>
