"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LineSquiggle as OriginalLineSquiggleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LineSquiggleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LineSquiggleIcon = component(Icon)({
  as: OriginalLineSquiggleIcon,
}) as Component<"svg", IconProps>
