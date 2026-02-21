"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Caravan as OriginalCaravanIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CaravanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CaravanIcon = component(Icon)({
  as: OriginalCaravanIcon,
}) as Component<"svg", IconProps>
