"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleArrowRight as OriginalCircleArrowRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleArrowRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleArrowRightIcon = component(Icon)({
  as: OriginalCircleArrowRightIcon,
}) as Component<"svg", IconProps>
