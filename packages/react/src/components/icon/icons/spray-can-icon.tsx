"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SprayCan as OriginalSprayCanIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SprayCanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SprayCanIcon = component(Icon)({
  as: OriginalSprayCanIcon,
}) as Component<"svg", IconProps>
