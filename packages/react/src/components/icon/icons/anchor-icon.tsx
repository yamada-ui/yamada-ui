"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Anchor as OriginalAnchorIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AnchorIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AnchorIcon = component(Icon)({
  as: OriginalAnchorIcon,
}) as Component<"svg", IconProps>
