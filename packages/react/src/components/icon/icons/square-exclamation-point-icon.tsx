"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareExclamationPoint as OriginalSquareExclamationPointIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareExclamationPointIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareExclamationPointIcon = component(Icon)({
  as: OriginalSquareExclamationPointIcon,
}) as Component<"svg", IconProps>
