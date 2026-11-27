"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleArrowUpRightExit as OriginalCircleArrowUpRightExitIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleArrowUpRightExitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleArrowUpRightExitIcon = component(Icon)({
  as: OriginalCircleArrowUpRightExitIcon,
}) as Component<"svg", IconProps>
