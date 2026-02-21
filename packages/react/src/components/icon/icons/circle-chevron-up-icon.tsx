"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleChevronUp as OriginalCircleChevronUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleChevronUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleChevronUpIcon = component(Icon)({
  as: OriginalCircleChevronUpIcon,
}) as Component<"svg", IconProps>
