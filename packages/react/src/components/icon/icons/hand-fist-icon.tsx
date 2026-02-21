"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HandFist as OriginalHandFistIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HandFistIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HandFistIcon = component(Icon)({
  as: OriginalHandFistIcon,
}) as Component<"svg", IconProps>
