"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Lasso as OriginalLassoIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LassoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LassoIcon = component(Icon)({
  as: OriginalLassoIcon,
}) as Component<"svg", IconProps>
