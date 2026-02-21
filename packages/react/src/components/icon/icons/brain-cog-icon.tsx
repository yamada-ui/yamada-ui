"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BrainCog as OriginalBrainCogIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BrainCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BrainCogIcon = component(Icon)({
  as: OriginalBrainCogIcon,
}) as Component<"svg", IconProps>
