"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SirenOff as OriginalSirenOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SirenOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SirenOffIcon = component(Icon)({
  as: OriginalSirenOffIcon,
}) as Component<"svg", IconProps>
