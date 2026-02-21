"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleChevronDown as OriginalCircleChevronDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleChevronDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleChevronDownIcon = component(Icon)({
  as: OriginalCircleChevronDownIcon,
}) as Component<"svg", IconProps>
