"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HandMetal as OriginalHandMetalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HandMetalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HandMetalIcon = component(Icon)({
  as: OriginalHandMetalIcon,
}) as Component<"svg", IconProps>
