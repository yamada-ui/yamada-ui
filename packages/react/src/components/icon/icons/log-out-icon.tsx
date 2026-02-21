"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LogOut as OriginalLogOutIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LogOutIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LogOutIcon = component(Icon)({
  as: OriginalLogOutIcon,
}) as Component<"svg", IconProps>
