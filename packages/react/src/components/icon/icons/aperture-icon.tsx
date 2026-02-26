"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Aperture as OriginalApertureIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ApertureIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ApertureIcon = component(Icon)({
  as: OriginalApertureIcon,
}) as Component<"svg", IconProps>
