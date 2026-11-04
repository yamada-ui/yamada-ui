"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleEuro as OriginalCircleEuroIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleEuroIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleEuroIcon = component(Icon)({
  as: OriginalCircleEuroIcon,
}) as Component<"svg", IconProps>
