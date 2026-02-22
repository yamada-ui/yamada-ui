"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Repeat as OriginalRepeatIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RepeatIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RepeatIcon = component(Icon)({
  as: OriginalRepeatIcon,
}) as Component<"svg", IconProps>
