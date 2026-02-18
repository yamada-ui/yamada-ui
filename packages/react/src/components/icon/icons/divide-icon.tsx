"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Divide as OriginalDivideIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DivideIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DivideIcon = component(Icon)({
  as: OriginalDivideIcon,
}) as Component<"svg", IconProps>
