"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GlobeCode as OriginalGlobeCodeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GlobeCodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GlobeCodeIcon = component(Icon)({
  as: OriginalGlobeCodeIcon,
}) as Component<"svg", IconProps>
