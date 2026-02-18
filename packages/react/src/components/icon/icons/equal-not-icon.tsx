"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { EqualNot as OriginalEqualNotIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EqualNotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EqualNotIcon = component(Icon)({
  as: OriginalEqualNotIcon,
}) as Component<"svg", IconProps>
