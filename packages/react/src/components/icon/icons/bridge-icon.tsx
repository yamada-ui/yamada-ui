"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Bridge as OriginalBridgeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BridgeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BridgeIcon = component(Icon)({
  as: OriginalBridgeIcon,
}) as Component<"svg", IconProps>
