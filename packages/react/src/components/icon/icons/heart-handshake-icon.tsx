"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HeartHandshake as OriginalHeartHandshakeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HeartHandshakeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HeartHandshakeIcon = component(Icon)({
  as: OriginalHeartHandshakeIcon,
}) as Component<"svg", IconProps>
