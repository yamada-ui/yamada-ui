"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Brain as OriginalBrainIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BrainIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BrainIcon = component(Icon)({
  as: OriginalBrainIcon,
}) as Component<"svg", IconProps>
