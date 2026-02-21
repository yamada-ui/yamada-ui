"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Focus as OriginalFocusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FocusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FocusIcon = component(Icon)({
  as: OriginalFocusIcon,
}) as Component<"svg", IconProps>
