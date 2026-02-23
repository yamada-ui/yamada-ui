"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ChevronFirst as OriginalChevronFirstIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChevronFirstIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChevronFirstIcon = component(Icon)({
  as: OriginalChevronFirstIcon,
}) as Component<"svg", IconProps>
