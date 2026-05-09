"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RepeatOff as OriginalRepeatOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RepeatOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RepeatOffIcon = component(Icon)({
  as: OriginalRepeatOffIcon,
}) as Component<"svg", IconProps>
