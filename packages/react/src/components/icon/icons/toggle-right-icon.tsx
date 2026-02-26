"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ToggleRight as OriginalToggleRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ToggleRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ToggleRightIcon = component(Icon)({
  as: OriginalToggleRightIcon,
}) as Component<"svg", IconProps>
