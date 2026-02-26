"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleArrowOutDownLeft as OriginalCircleArrowOutDownLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleArrowOutDownLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleArrowOutDownLeftIcon = component(Icon)({
  as: OriginalCircleArrowOutDownLeftIcon,
}) as Component<"svg", IconProps>
