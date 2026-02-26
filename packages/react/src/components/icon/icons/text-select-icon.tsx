"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TextSelect as OriginalTextSelectIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TextSelectIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TextSelectIcon = component(Icon)({
  as: OriginalTextSelectIcon,
}) as Component<"svg", IconProps>
