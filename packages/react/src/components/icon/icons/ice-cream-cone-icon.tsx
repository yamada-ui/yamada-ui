"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { IceCreamCone as OriginalIceCreamConeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `IceCreamConeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const IceCreamConeIcon = component(Icon)({
  as: OriginalIceCreamConeIcon,
}) as Component<"svg", IconProps>
