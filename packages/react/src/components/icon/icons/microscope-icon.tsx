"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Microscope as OriginalMicroscopeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MicroscopeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MicroscopeIcon = component(Icon)({
  as: OriginalMicroscopeIcon,
}) as Component<"svg", IconProps>
