"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Carton as OriginalCartonIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CartonIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CartonIcon = component(Icon)({
  as: OriginalCartonIcon,
}) as Component<"svg", IconProps>
