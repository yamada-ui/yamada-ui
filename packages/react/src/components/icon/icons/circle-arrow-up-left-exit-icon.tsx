"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleArrowUpLeftExit as OriginalCircleArrowUpLeftExitIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleArrowUpLeftExitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleArrowUpLeftExitIcon = component(Icon)({
  as: OriginalCircleArrowUpLeftExitIcon,
}) as Component<"svg", IconProps>
