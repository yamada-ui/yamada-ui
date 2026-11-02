"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Avocado as OriginalAvocadoIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AvocadoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AvocadoIcon = component(Icon)({
  as: OriginalAvocadoIcon,
}) as Component<"svg", IconProps>
