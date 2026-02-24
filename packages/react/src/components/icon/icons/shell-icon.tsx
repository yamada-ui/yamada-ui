"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Shell as OriginalShellIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShellIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShellIcon = component(Icon)({
  as: OriginalShellIcon,
}) as Component<"svg", IconProps>
