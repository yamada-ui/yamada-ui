"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LogIn as OriginalLogInIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LogInIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LogInIcon = component(Icon)({
  as: OriginalLogInIcon,
}) as Component<"svg", IconProps>
