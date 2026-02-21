"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Lightbulb as OriginalLightbulbIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LightbulbIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LightbulbIcon = component(Icon)({
  as: OriginalLightbulbIcon,
}) as Component<"svg", IconProps>
