"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareDashedPlus as OriginalSquareDashedPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareDashedPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareDashedPlusIcon = component(Icon)({
  as: OriginalSquareDashedPlusIcon,
}) as Component<"svg", IconProps>
