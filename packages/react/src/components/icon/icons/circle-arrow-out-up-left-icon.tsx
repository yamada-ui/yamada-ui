"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleArrowOutUpLeft as OriginalCircleArrowOutUpLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleArrowOutUpLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleArrowOutUpLeftIcon = component(Icon)({
  as: OriginalCircleArrowOutUpLeftIcon,
}) as Component<"svg", IconProps>
