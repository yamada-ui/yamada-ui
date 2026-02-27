"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Feather as OriginalFeatherIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FeatherIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FeatherIcon = component(Icon)({
  as: OriginalFeatherIcon,
}) as Component<"svg", IconProps>
