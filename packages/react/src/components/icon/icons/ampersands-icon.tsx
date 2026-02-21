"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Ampersands as OriginalAmpersandsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AmpersandsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AmpersandsIcon = component(Icon)({
  as: OriginalAmpersandsIcon,
}) as Component<"svg", IconProps>
