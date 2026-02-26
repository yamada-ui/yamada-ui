"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Coins as OriginalCoinsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CoinsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CoinsIcon = component(Icon)({
  as: OriginalCoinsIcon,
}) as Component<"svg", IconProps>
