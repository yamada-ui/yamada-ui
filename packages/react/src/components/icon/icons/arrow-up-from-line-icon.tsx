"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowUpFromLine as OriginalArrowUpFromLineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowUpFromLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowUpFromLineIcon = component(Icon)({
  as: OriginalArrowUpFromLineIcon,
}) as Component<"svg", IconProps>
