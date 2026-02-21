"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ToggleLeft as OriginalToggleLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ToggleLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ToggleLeftIcon = component(Icon)({
  as: OriginalToggleLeftIcon,
}) as Component<"svg", IconProps>
