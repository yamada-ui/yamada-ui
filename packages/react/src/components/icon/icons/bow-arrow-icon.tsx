"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BowArrow as OriginalBowArrowIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BowArrowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BowArrowIcon = component(Icon)({
  as: OriginalBowArrowIcon,
}) as Component<"svg", IconProps>
