"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HandCoins as OriginalHandCoinsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HandCoinsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HandCoinsIcon = component(Icon)({
  as: OriginalHandCoinsIcon,
}) as Component<"svg", IconProps>
