"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Component as OriginalComponentIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ComponentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ComponentIcon = component(Icon)({
  as: OriginalComponentIcon,
}) as Component<"svg", IconProps>
