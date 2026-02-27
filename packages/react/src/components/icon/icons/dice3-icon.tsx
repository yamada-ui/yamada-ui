"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Dice3 as OriginalDice3Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Dice3Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Dice3Icon = component(Icon)({
  as: OriginalDice3Icon,
}) as Component<"svg", IconProps>
