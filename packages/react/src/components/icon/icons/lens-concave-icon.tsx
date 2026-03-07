"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LensConcave as OriginalLensConcaveIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LensConcaveIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LensConcaveIcon = component(Icon)({
  as: OriginalLensConcaveIcon,
}) as Component<"svg", IconProps>
