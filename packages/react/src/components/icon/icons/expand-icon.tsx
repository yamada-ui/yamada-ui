"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Expand as OriginalExpandIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ExpandIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ExpandIcon = component(Icon)({
  as: OriginalExpandIcon,
}) as Component<"svg", IconProps>
