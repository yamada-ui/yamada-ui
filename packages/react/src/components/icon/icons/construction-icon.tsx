"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Construction as OriginalConstructionIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ConstructionIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ConstructionIcon = component(Icon)({
  as: OriginalConstructionIcon,
}) as Component<"svg", IconProps>
