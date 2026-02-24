"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { X as OriginalXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `XIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const XIcon = component(Icon)({ as: OriginalXIcon }) as Component<
  "svg",
  IconProps
>
