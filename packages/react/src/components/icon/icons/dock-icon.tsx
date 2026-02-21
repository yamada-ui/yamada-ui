"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Dock as OriginalDockIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DockIcon = component(Icon)({ as: OriginalDockIcon }) as Component<
  "svg",
  IconProps
>
