"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleArrowDownRightExit as OriginalCircleArrowDownRightExitIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleArrowDownRightExitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleArrowDownRightExitIcon = component(Icon)({
  as: OriginalCircleArrowDownRightExitIcon,
}) as Component<"svg", IconProps>
