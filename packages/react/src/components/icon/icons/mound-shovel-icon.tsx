"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MoundShovel as OriginalMoundShovelIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MoundShovelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MoundShovelIcon = component(Icon)({
  as: OriginalMoundShovelIcon,
}) as Component<"svg", IconProps>
