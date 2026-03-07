"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleArrowDown as OriginalCircleArrowDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleArrowDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleArrowDownIcon = component(Icon)({
  as: OriginalCircleArrowDownIcon,
}) as Component<"svg", IconProps>
