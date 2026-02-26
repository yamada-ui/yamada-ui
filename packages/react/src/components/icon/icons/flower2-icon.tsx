"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Flower2 as OriginalFlower2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Flower2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Flower2Icon = component(Icon)({
  as: OriginalFlower2Icon,
}) as Component<"svg", IconProps>
