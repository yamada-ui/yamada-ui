"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronUp as OriginalChevronUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChevronUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChevronUpIcon = component(Icon)({
  as: OriginalChevronUpIcon,
}) as Component<"svg", IconProps>
