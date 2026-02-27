"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ServerCrash as OriginalServerCrashIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ServerCrashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ServerCrashIcon = component(Icon)({
  as: OriginalServerCrashIcon,
}) as Component<"svg", IconProps>
