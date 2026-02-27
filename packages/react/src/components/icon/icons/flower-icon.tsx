"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Flower as OriginalFlowerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FlowerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FlowerIcon = component(Icon)({
  as: OriginalFlowerIcon,
}) as Component<"svg", IconProps>
