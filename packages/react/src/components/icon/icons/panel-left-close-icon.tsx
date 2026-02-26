"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PanelLeftClose as OriginalPanelLeftCloseIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PanelLeftCloseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PanelLeftCloseIcon = component(Icon)({
  as: OriginalPanelLeftCloseIcon,
}) as Component<"svg", IconProps>
