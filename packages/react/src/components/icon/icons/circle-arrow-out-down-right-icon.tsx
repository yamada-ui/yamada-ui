"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleArrowOutDownRight as OriginalCircleArrowOutDownRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleArrowOutDownRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleArrowOutDownRightIcon = component(Icon)({
  as: OriginalCircleArrowOutDownRightIcon,
}) as Component<"svg", IconProps>
