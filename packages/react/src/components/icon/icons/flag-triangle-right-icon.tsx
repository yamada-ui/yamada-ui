"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FlagTriangleRight as OriginalFlagTriangleRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FlagTriangleRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FlagTriangleRightIcon = component(Icon)({
  as: OriginalFlagTriangleRightIcon,
}) as Component<"svg", IconProps>
