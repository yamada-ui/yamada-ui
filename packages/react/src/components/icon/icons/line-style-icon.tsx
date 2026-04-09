"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LineStyle as OriginalLineStyleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LineStyleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LineStyleIcon = component(Icon)({
  as: OriginalLineStyleIcon,
}) as Component<"svg", IconProps>
