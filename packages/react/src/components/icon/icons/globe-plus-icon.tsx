"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GlobePlus as OriginalGlobePlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GlobePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GlobePlusIcon = component(Icon)({
  as: OriginalGlobePlusIcon,
}) as Component<"svg", IconProps>
