"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronRight as OriginalChevronRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChevronRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChevronRightIcon = component(Icon)({
  as: OriginalChevronRightIcon,
}) as Component<"svg", IconProps>
