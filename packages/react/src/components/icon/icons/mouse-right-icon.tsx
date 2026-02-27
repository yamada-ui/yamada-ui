"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MouseRight as OriginalMouseRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MouseRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MouseRightIcon = component(Icon)({
  as: OriginalMouseRightIcon,
}) as Component<"svg", IconProps>
