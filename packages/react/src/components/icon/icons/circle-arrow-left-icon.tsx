"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleArrowLeft as OriginalCircleArrowLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleArrowLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleArrowLeftIcon = component(Icon)({
  as: OriginalCircleArrowLeftIcon,
}) as Component<"svg", IconProps>
