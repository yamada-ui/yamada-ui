"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Merge as OriginalMergeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MergeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MergeIcon = component(Icon)({
  as: OriginalMergeIcon,
}) as Component<"svg", IconProps>
