"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Equal as OriginalEqualIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EqualIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EqualIcon = component(Icon)({
  as: OriginalEqualIcon,
}) as Component<"svg", IconProps>
