"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Beaker as OriginalBeakerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BeakerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BeakerIcon = component(Icon)({
  as: OriginalBeakerIcon,
}) as Component<"svg", IconProps>
