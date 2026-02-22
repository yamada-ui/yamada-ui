"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Dice4 as OriginalDice4Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Dice4Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Dice4Icon = component(Icon)({
  as: OriginalDice4Icon,
}) as Component<"svg", IconProps>
