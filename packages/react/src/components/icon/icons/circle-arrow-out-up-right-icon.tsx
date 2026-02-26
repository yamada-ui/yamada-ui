"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleArrowOutUpRight as OriginalCircleArrowOutUpRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleArrowOutUpRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleArrowOutUpRightIcon = component(Icon)({
  as: OriginalCircleArrowOutUpRightIcon,
}) as Component<"svg", IconProps>
