"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GapVertical as OriginalGapVerticalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GapVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GapVerticalIcon = component(Icon)({
  as: OriginalGapVerticalIcon,
}) as Component<"svg", IconProps>
