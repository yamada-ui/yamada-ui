"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Music2 as OriginalMusic2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Music2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Music2Icon = component(Icon)({
  as: OriginalMusic2Icon,
}) as Component<"svg", IconProps>
