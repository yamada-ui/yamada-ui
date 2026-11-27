"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleArrowDownLeftExit as OriginalCircleArrowDownLeftExitIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleArrowDownLeftExitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleArrowDownLeftExitIcon = component(Icon)({
  as: OriginalCircleArrowDownLeftExitIcon,
}) as Component<"svg", IconProps>
