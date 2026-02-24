"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CornerUpLeft as OriginalCornerUpLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CornerUpLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CornerUpLeftIcon = component(Icon)({
  as: OriginalCornerUpLeftIcon,
}) as Component<"svg", IconProps>
