"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Eject as OriginalEjectIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EjectIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EjectIcon = component(Icon)({
  as: OriginalEjectIcon,
}) as Component<"svg", IconProps>
