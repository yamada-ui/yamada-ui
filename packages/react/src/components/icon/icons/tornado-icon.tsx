"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Tornado as OriginalTornadoIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TornadoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TornadoIcon = component(Icon)({
  as: OriginalTornadoIcon,
}) as Component<"svg", IconProps>
