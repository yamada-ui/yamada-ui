"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HandHeart as OriginalHandHeartIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HandHeartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HandHeartIcon = component(Icon)({
  as: OriginalHandHeartIcon,
}) as Component<"svg", IconProps>
