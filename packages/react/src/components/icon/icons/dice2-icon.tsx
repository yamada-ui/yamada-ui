"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Dice2 as OriginalDice2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Dice2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Dice2Icon = component(Icon)({
  as: OriginalDice2Icon,
}) as Component<"svg", IconProps>
