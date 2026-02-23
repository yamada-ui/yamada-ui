"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Award as OriginalAwardIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AwardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AwardIcon = component(Icon)({
  as: OriginalAwardIcon,
}) as Component<"svg", IconProps>
