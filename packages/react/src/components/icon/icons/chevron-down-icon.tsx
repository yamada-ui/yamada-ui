"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronDown as OriginalChevronDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChevronDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChevronDownIcon = component(Icon)({
  as: OriginalChevronDownIcon,
}) as Component<"svg", IconProps>
