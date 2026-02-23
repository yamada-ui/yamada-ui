"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquarePower as OriginalSquarePowerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquarePowerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquarePowerIcon = component(Icon)({
  as: OriginalSquarePowerIcon,
}) as Component<"svg", IconProps>
