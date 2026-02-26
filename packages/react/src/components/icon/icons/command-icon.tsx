"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Command as OriginalCommandIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CommandIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CommandIcon = component(Icon)({
  as: OriginalCommandIcon,
}) as Component<"svg", IconProps>
