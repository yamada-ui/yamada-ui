"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Tally2 as OriginalTally2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Tally2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Tally2Icon = component(Icon)({
  as: OriginalTally2Icon,
}) as Component<"svg", IconProps>
