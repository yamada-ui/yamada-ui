"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HandPlatter as OriginalHandPlatterIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HandPlatterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HandPlatterIcon = component(Icon)({
  as: OriginalHandPlatterIcon,
}) as Component<"svg", IconProps>
