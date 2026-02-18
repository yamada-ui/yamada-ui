"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Ampersand as OriginalAmpersandIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AmpersandIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AmpersandIcon = component(Icon)({
  as: OriginalAmpersandIcon,
}) as Component<"svg", IconProps>
