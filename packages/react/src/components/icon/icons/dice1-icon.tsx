"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Dice1 as OriginalDice1Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Dice1Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Dice1Icon = component(Icon)({
  as: OriginalDice1Icon,
}) as Component<"svg", IconProps>
