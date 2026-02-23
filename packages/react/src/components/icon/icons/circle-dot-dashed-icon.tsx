"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleDotDashed as OriginalCircleDotDashedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleDotDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleDotDashedIcon = component(Icon)({
  as: OriginalCircleDotDashedIcon,
}) as Component<"svg", IconProps>
