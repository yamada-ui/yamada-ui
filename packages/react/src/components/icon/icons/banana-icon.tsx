"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Banana as OriginalBananaIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BananaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BananaIcon = component(Icon)({
  as: OriginalBananaIcon,
}) as Component<"svg", IconProps>
