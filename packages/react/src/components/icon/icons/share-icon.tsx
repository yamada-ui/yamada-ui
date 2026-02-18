"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Share as OriginalShareIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShareIcon = component(Icon)({
  as: OriginalShareIcon,
}) as Component<"svg", IconProps>
