"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HeartX as OriginalHeartXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HeartXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HeartXIcon = component(Icon)({
  as: OriginalHeartXIcon,
}) as Component<"svg", IconProps>
