"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CirclePower as OriginalCirclePowerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CirclePowerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CirclePowerIcon = component(Icon)({
  as: OriginalCirclePowerIcon,
}) as Component<"svg", IconProps>
