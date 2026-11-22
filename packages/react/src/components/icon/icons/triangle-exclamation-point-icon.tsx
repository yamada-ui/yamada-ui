"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TriangleExclamationPoint as OriginalTriangleExclamationPointIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TriangleExclamationPointIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TriangleExclamationPointIcon = component(Icon)({
  as: OriginalTriangleExclamationPointIcon,
}) as Component<"svg", IconProps>
