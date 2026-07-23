"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleEuroSign as OriginalCircleEuroSignIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleEuroSignIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleEuroSignIcon = component(Icon)({
  as: OriginalCircleEuroSignIcon,
}) as Component<"svg", IconProps>
