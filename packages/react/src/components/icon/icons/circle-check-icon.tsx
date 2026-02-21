"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleCheck as OriginalCircleCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleCheckIcon = component(Icon)({
  as: OriginalCircleCheckIcon,
}) as Component<"svg", IconProps>
