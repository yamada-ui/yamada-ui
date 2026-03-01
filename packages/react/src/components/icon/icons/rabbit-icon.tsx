"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Rabbit as OriginalRabbitIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RabbitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RabbitIcon = component(Icon)({
  as: OriginalRabbitIcon,
}) as Component<"svg", IconProps>
