"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Dice6 as OriginalDice6Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Dice6Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Dice6Icon = component(Icon)({
  as: OriginalDice6Icon,
}) as Component<"svg", IconProps>
