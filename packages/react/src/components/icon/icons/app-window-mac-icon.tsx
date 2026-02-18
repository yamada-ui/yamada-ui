"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AppWindowMac as OriginalAppWindowMacIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AppWindowMacIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AppWindowMacIcon = component(Icon)({
  as: OriginalAppWindowMacIcon,
}) as Component<"svg", IconProps>
