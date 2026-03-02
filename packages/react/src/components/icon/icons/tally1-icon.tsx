"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Tally1 as OriginalTally1Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Tally1Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Tally1Icon = component(Icon)({
  as: OriginalTally1Icon,
}) as Component<"svg", IconProps>
