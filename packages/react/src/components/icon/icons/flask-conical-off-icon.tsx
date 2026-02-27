"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FlaskConicalOff as OriginalFlaskConicalOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FlaskConicalOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FlaskConicalOffIcon = component(Icon)({
  as: OriginalFlaskConicalOffIcon,
}) as Component<"svg", IconProps>
