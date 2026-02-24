"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Unplug as OriginalUnplugIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UnplugIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UnplugIcon = component(Icon)({
  as: OriginalUnplugIcon,
}) as Component<"svg", IconProps>
