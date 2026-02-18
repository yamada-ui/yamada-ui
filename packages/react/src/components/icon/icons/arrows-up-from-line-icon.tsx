"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ArrowsUpFromLine as OriginalArrowsUpFromLineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ArrowsUpFromLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ArrowsUpFromLineIcon = component(Icon)({
  as: OriginalArrowsUpFromLineIcon,
}) as Component<"svg", IconProps>
