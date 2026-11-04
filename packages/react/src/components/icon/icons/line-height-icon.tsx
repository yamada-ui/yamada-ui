"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LineHeight as OriginalLineHeightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LineHeightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LineHeightIcon = component(Icon)({
  as: OriginalLineHeightIcon,
}) as Component<"svg", IconProps>
