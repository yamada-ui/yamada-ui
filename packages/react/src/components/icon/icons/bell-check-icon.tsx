"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BellCheck as OriginalBellCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BellCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BellCheckIcon = component(Icon)({
  as: OriginalBellCheckIcon,
}) as Component<"svg", IconProps>
