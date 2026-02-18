"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PanelRightClose as OriginalPanelRightCloseIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PanelRightCloseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PanelRightCloseIcon = component(Icon)({
  as: OriginalPanelRightCloseIcon,
}) as Component<"svg", IconProps>
