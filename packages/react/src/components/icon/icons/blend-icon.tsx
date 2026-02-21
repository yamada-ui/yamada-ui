"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Blend as OriginalBlendIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BlendIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BlendIcon = component(Icon)({
  as: OriginalBlendIcon,
}) as Component<"svg", IconProps>
