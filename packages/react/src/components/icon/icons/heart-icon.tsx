"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Heart as OriginalHeartIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HeartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HeartIcon = component(Icon)({
  as: OriginalHeartIcon,
}) as Component<"svg", IconProps>
