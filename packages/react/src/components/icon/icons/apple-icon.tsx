"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Apple as OriginalAppleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AppleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AppleIcon = component(Icon)({
  as: OriginalAppleIcon,
}) as Component<"svg", IconProps>
