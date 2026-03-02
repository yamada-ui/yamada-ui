"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowDownFromLine as OriginalArrowDownFromLineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowDownFromLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowDownFromLineIcon = component(Icon)({
  as: OriginalArrowDownFromLineIcon,
}) as Component<"svg", IconProps>
