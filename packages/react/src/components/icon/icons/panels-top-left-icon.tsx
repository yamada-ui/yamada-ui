"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PanelsTopLeft as OriginalPanelsTopLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PanelsTopLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PanelsTopLeftIcon = component(Icon)({
  as: OriginalPanelsTopLeftIcon,
}) as Component<"svg", IconProps>
