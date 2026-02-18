"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FlagTriangleLeft as OriginalFlagTriangleLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FlagTriangleLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FlagTriangleLeftIcon = component(Icon)({
  as: OriginalFlagTriangleLeftIcon,
}) as Component<"svg", IconProps>
