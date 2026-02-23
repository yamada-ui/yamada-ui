"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Globe as OriginalGlobeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GlobeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GlobeIcon = component(Icon)({
  as: OriginalGlobeIcon,
}) as Component<"svg", IconProps>
