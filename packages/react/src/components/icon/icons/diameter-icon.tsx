"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Diameter as OriginalDiameterIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DiameterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DiameterIcon = component(Icon)({
  as: OriginalDiameterIcon,
}) as Component<"svg", IconProps>
