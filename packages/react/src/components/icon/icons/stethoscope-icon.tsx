"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Stethoscope as OriginalStethoscopeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StethoscopeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StethoscopeIcon = component(Icon)({
  as: OriginalStethoscopeIcon,
}) as Component<"svg", IconProps>
